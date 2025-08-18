import pandas as pd
from datetime import datetime

# Read the CSV file
df = pd.read_csv('daily_wholesale_price_Wheat-upto_apr_2015.csv')

# Function to add 10 years to the year in the Date column
def add_10_years(date_str):
    try:
        # Convert the date string to a datetime object
        date_obj = datetime.strptime(date_str, "%d-%m-%y")
        # Add 10 years to the year
        new_date_obj = date_obj.replace(year=date_obj.year + 10)
        # Return the new date as a string in the same format
        return new_date_obj.strftime("%d-%m-%y")
    except ValueError:
        # If there's an error in conversion (e.g., NA or missing values), return the original value
        return date_str

# Apply the function to the Date column
df['Date'] = df['Date'].apply(add_10_years)

# Save the updated DataFrame back to a new CSV file
df.to_csv('updated_file.csv', index=False)

print("CSV file updated successfully!")
