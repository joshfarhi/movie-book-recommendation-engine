# Movie-Book-Recommendation-Engine

## Overview

This project is designed to build a **Recommendation Engine** that suggests personalized **movies** or **books** based on user preferences. The engine supports two recommendation methods:

1. **Collaborative Filtering**: Recommends items based on user ratings and interactions.
2. **Content-Based Filtering**: Recommends items based on metadata such as genres, authors, and descriptions.

The system is optimized to handle large datasets using **Django ORM** with query optimizations and **caching** for faster retrieval. Additionally, the project includes **data visualization** to showcase trends and user preferences.

## Features

- **Personalized Recommendations**: Recommends movies/books based on user preferences.
- **Collaborative Filtering**: Suggests items based on user-to-user or item-to-item similarity.
- **Content-Based Filtering**: Suggests items based on item metadata (genres, authors, etc.).
- **Caching**: Utilizes Redis for faster recommendation retrieval.
- **Query Optimization**: Efficient data retrieval using Django ORM techniques (`select_related`, `prefetch_related`).
- **Data Visualization**: Displays recommendation trends and user preference insights using graphs.

## Tech Stack

- **Backend**: Django, Django ORM
- **Database**: PostgreSQL or MySQL
- **Caching**: Redis
- **Recommendation Engine**: Python, scikit-learn, surprise (for collaborative filtering)
- **Visualization**: matplotlib, plotly, django-plotly-dash
- **Front-end**: Django templates (HTML, CSS)
