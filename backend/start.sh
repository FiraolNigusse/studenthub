#!/usr/bin/env bash
# Exit on error
set -o errexit

# Run migrations
python manage.py migrate

# Start Gunicorn 
# $PORT is provided by Render
gunicorn backend.wsgi:application --bind 0.0.0.0:$PORT
