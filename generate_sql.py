import os

def generate_bash_script():
    # Paths
    md_path = "/Users/rpdev/portfolio/devfest_content_new.md"
    day1_b64_path = "/tmp/day1_crowd.txt"
    day2_b64_path = "/tmp/day2_volunteers.txt"
    vol_org_b64_path = "/tmp/volunteers_organizers.txt"
    output_sql = "/Users/rpdev/portfolio/reset_devfest_post.sql"

    # Read Markdown content
    with open(md_path, 'r') as f:
        content = f.read()

    # Read base64 strings
    with open(day1_b64_path, 'r') as f:
        day1_b64 = f.read().strip()
    with open(day2_b64_path, 'r') as f:
        day2_b64 = f.read().strip()
    with open(vol_org_b64_path, 'r') as f:
        vol_org_b64 = f.read().strip()

    # Prepend data URI prefix if needed (assuming base64 column expects it or just raw string)
    # The snippet didn't show the prefix, but usually it's "data:image/jpeg;base64,"
    prefix = "data:image/jpeg;base64,"
    day1_uri = prefix + day1_b64
    day2_uri = prefix + day2_b64
    vol_org_uri = prefix + vol_org_b64

    # Embed images in content
    # Let's add them at appropriate places in the markdown content
    content_with_images = content.replace("## The Check-In Chaos", f"![Day 1 Crowd]({day1_uri})\n\n## The Check-In Chaos")
    content_with_images = content_with_images.replace("### Day 2: Deep Dives and Workshops", f"![Day 2 with Mascot]({day2_uri})\n\n### Day 2: Deep Dives and Workshops")
    content_with_images = content_with_images.replace("## What Stuck", f"![Volunteers and Organizers]({vol_org_uri})\n\n## What Stuck")

    # Double single quotes for SQL safety
    content_sql = content_with_images.replace("'", "''")
    title = "Volunteering at DevFest Kosova 2025: Chaos, Community, and Code".replace("'", "''")
    slug = "devfest-kosova-2025"
    excerpt = "An experiential look into volunteering at the largest tech event in the Balkans, from the chaotic check-in to the world-class keynotes.".replace("'", "''")
    tag = "Community"
    author = "Ruhan" # Assuming based on previous context or common usage
    date = "2025-12-06" # Date of the event

    sql = f"""-- CLEANUP
DELETE FROM blog_posts WHERE slug = '{slug}';

-- INSERT
INSERT INTO blog_posts (
    title,
    slug,
    content,
    excerpt,
    tag,
    reading_time_minutes,
    featured_image,
    date,
    author_name
) VALUES (
    '{title}',
    '{slug}',
    '{content_sql}',
    '{excerpt}',
    '{tag}',
    8,
    '{day1_uri}',
    '{date}',
    '{author}'
);
"""
    with open(output_sql, 'w') as f:
        f.write(sql)
    print(f"SQL generated at {output_sql}")

if __name__ == "__main__":
    generate_bash_script()
