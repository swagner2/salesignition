import os
import xml.etree.ElementTree as ET
from xml.dom import minidom

def main():
    pages_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), "../src/pages"))
    blog_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), "../src/content/blog"))
    domain = "https://salesignition.com"

    urls = []

    # Crawl Pages
    for root, dirs, files in os.walk(pages_dir):
        if "api" in root or "keystatic" in root:
            continue
        for file in files:
            if file.startswith("[") or file.startswith("404"):
                continue
            if file.endswith(".astro") or file.endswith(".html"):
                rel_path = os.path.relpath(os.path.join(root, file), pages_dir)
                path = os.path.splitext(rel_path)[0]
                
                if path == "index":
                    path = ""
                elif path.endswith("/index"):
                    path = path[:-6]
                
                full_url = f"{domain}/{path}".rstrip("/")
                urls.append(full_url)

    # Crawl Blog Posts
    if os.path.exists(blog_dir):
        for file in os.listdir(blog_dir):
            if file.endswith(".md") or file.endswith(".mdoc"):
                slug = os.path.splitext(file)[0]
                full_url = f"{domain}/blog/{slug}"
                urls.append(full_url)

    # De-duplicate
    urls = sorted(list(set(urls)))

    # Build XML
    urlset = ET.Element("urlset", xmlns="http://www.sitemaps.org/schemas/sitemap/0.9")
    for u in urls:
        url_el = ET.SubElement(urlset, "url")
        loc = ET.SubElement(url_el, "loc")
        loc.text = u
        changefreq = ET.SubElement(url_el, "changefreq")
        changefreq.text = "weekly"
        priority = ET.SubElement(url_el, "priority")
        priority.text = "1.0" if u == domain else "0.8"

    xml_str = ET.tostring(urlset, encoding="utf-8")
    reparsed = minidom.parseString(xml_str)
    pretty_xml = reparsed.toprettyxml(indent="  ")
    pretty_xml_clean = "\n".join([line for line in pretty_xml.splitlines() if "xml version" not in line])
    pretty_xml_final = '<?xml version="1.0" encoding="UTF-8"?>\n' + pretty_xml_clean.strip()

    public_sitemap = os.path.abspath(os.path.join(os.path.dirname(__file__), "../public/sitemap.xml"))
    with open(public_sitemap, "w") as f:
        f.write(pretty_xml_final)

    print(f"Generated sitemap with {len(urls)} URLs at {public_sitemap}")

if __name__ == "__main__":
    main()
