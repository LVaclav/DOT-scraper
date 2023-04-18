import json
from collections import Counter

# read the JSON file
with open('data.json') as f:
    data = json.load(f)

# extract relevant information and calculate statistics
locations = Counter()
scheduled_times = Counter()
spotted_times = Counter()
for appointment in data['booking'].values():
    key = (appointment['day_of'], appointment['location_name'])
    locations[key] += 1
    scheduled_times[appointment['scheduled_at']] += 1
    spotted_times[appointment['spotted_at']] += 1

# print results
print('Number of appointments by location and date:')
for key, value in locations.items():
    print(f'{key[1]} on {key[0]}: {value} appointments')
print()

print('Most common scheduled times:')
for time, count in scheduled_times.most_common(10):
    print(f'{time}: {count} appointments')
print()

print('Most common spotted times:')
for time, count in spotted_times.most_common(10):
    print(f'{time}: {count} appointments')
