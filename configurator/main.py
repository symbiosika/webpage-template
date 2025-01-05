from flask import Flask, render_template, request, redirect, url_for
import json
import os
import re

app = Flask(__name__)

# Add custom regex filter
@app.template_filter('regex_match')
def regex_match(value, pattern):
    return bool(re.match(pattern, str(value)))

# Path to the defaults directory
CONFIG_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'src', 'defaults'))

def load_config(filename):
    """Load JSON configuration from a file."""
    path = os.path.join(CONFIG_DIR, filename)
    with open(path, 'r', encoding='utf-8') as f:
        return json.load(f)

def save_config(filename, data):
    """Save JSON configuration to a file."""
    path = os.path.join(CONFIG_DIR, filename)
    with open(path, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)

@app.route('/')
def index():
    """Home page listing all configuration files."""
    config_files = [f for f in os.listdir(CONFIG_DIR) if f.endswith('.json')]
    return render_template('index.html', config_files=config_files)

@app.route('/edit/<filename>', methods=['GET', 'POST'])
def edit_config(filename):
    """Page to edit a specific configuration file."""
    config_path = os.path.join(CONFIG_DIR, filename)
    
    if not os.path.exists(config_path):
        return f"Configuration file {filename} does not exist.", 404

    if request.method == 'POST':
        # Parse the form data into a nested dictionary
        form_data = request.form.to_dict()
        new_config = {}

        for key, value in form_data.items():
            keys = key.split('.')
            d = new_config
            for k in keys[:-1]:
                if k.isdigit():
                    k = int(k)
                if isinstance(k, int):
                    if not isinstance(d, list):
                        d = []
                    while len(d) <= k:
                        d.append({})
                    d = d[k]
                else:
                    d = d.setdefault(k, {})
            last_key = keys[-1]
            if last_key.isdigit():
                last_key = int(last_key)
                if not isinstance(d, list):
                    d = []
                while len(d) <= last_key:
                    d.append({})
                d[last_key] = value
            else:
                d[last_key] = value

        # Load existing config to preserve list structures if necessary
        existing_config = load_config(filename)
        merged_config = merge_dicts(existing_config, new_config)
        save_config(filename, merged_config)

        return redirect(url_for('index'))
    else:
        config = load_config(filename)
        return render_template('edit_config.html', filename=filename, config=config)

def merge_dicts(original, new):
    """Recursively merge two dictionaries."""
    for key, value in new.items():
        if isinstance(value, dict) and key in original:
            original[key] = merge_dicts(original.get(key, {}), value)
        else:
            original[key] = value
    return original

if __name__ == '__main__':
    app.run(debug=True)