
new = [
    "Unraveling the Mystery of Ghosts",
    "True Ghost Stories: Haunting Encounters",
    "Ghosts Caught on Camera: Real or Fake?",
    "Exploring the Paranormal: Ghost Sightings",
    "Ghosts: Are They Among Us?",
    "Ghostly Encounters: Chilling Tales",
    "The Haunting World of Ghosts",
    "Ghostly Apparitions: Supernatural Stories",
    "In Search of Ghosts: Unexplained Phenomena",
    "Ghost Hunting: Investigating the Otherworldly"
]
def search_titles(keyword, titles):
    matching_titles = [title for title in titles if keyword.lower() in title.lower()]
    return matching_titles

# The 'tim' variable containing the titles of your YouTube video context food vlogs
tim = [
    "Ultimate Food Adventure: Exploring Exotic Flavors in Your City!",
    "Foodie's Paradise: Trying Iconic Dishes from Around the World!",
    "Hidden Gems: Unearthing Delicious Local Eateries on Our Food Journey",
    "Food Fusion Fiesta: Blending Cuisines for Unique Tastes!",
    "Mouthwatering Street Food Tour: Savoring the Best Bites in Your City",
    "Eating Like Locals: Immersing in Culture Through Culinary Delights",
    "Epic Food Challenge: Taking on Spicy/Enormous/Unique Dishes!",
    "Food Truck Frenzy: Satisfying Cravings at Every Stop!",
    "Home Cooking Adventures: Sharing Grandma's Secret Recipes!",
    "Fine Dining Extravaganza: Indulging in Luxury Cuisine at Top Restaurants",
    "Vegan Foodie's Delight: Exploring Plant-Based Heaven in Your City",
    "Food Science Experiments: Creating Unconventional Dishes!",
    "DIY Food Tour: Recreating Iconic Dishes at Home!",
    "Culinary Road Trip: Tasting Our Way Across Country/Region",
    "Food Festival Feasts: Celebrating Flavors and Fun!"
]
tim.extend(new)
# Example usage:
keyword_to_search = input("Enter a keyword to search for in the titles: ")
matching_titles = search_titles(keyword_to_search, tim)

if matching_titles:
    print("Matching titles:")
    for title in matching_titles:
        print(title)
else:
    print("No matching titles found.")

