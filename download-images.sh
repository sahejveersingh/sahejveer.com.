#!/bin/bash

# Create images directory if it doesn't exist
mkdir -p public/images

# Download images
curl -o public/images/hero-bg.jpg "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
curl -o public/images/work-bg.jpg "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
curl -o public/images/education-bg.jpg "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop"
curl -o public/images/ncr-office.jpg "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop"
curl -o public/images/frontend-dev.jpg "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069&auto=format&fit=crop"
curl -o public/images/backend-dev.jpg "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop"
curl -o public/images/govt-office.jpg "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
curl -o public/images/uog-campus.jpg "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop" 