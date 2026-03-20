#!/usr/bin/env bash
# Exit on error
set -o errexit

# Collect static files (Critical for WhiteNoise to work on Render)
python manage.py collectstatic --no-input

# Run migrations
python manage.py migrate

# Start Gunicorn
gunicorn backend.wsgi:application --bind 0.0.0.0:$PORT
