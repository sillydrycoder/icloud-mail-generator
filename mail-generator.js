const puppeteer = require('puppeteer');

async function generate_mail() {
    // Load userdata from Chrome
    // User data directory is the folder where Chrome stores all the data like cookies, cache, etc.
    // This is done so that we don't have to log in every time we run the script.
    const user_data_folder = 'C:/Users/mrbea/AppData/Local/Google/Chrome/User Data';
    const browser = await puppeteer.launch({ userDataDir: user_data_folder, headless: false, timeout: 10000 }); // Adjust the timeout value as needed
    const page = await browser.newPage();
    
    // Go to iCloud Mail page and wait until the page loads
    await Promise.all([
        page.goto('https://www.icloud.com/icloudplus/'),
        page.waitForNavigation({ waitUntil: 'networkidle2' }),
    ]);

    // Click the button with aria-label="Show more options for Hide My Email"
    await page.waitForSelector('button[aria-label="Show more options for Hide My Email"]');
    await page.click('button[aria-label="Show more options for Hide My Email"]');
    
    // Wait for the iframe with class: child-application
    await page.waitForSelector('iframe[class="child-application"]');
    // get iframe to work with it
    const frame = await page.$('iframe[class="child-application"]');
    // Wait for the Add button with class containing: button-rounded-rectangle
    await frame.waitForSelector('button[class*="button-rounded-rectangle"]');
    
    // Click on the Add button
    await frame.click('button[class*="button-rounded-rectangle"]');
    
    // Get text content of div in iframe with class: Typography GeneratedEmail-hme Typography-semibold
    const generated_email = await frame.$eval('.Typography.GeneratedEmail-hme.Typography-semibold', el => el.textContent);
    
    // Add a label to the email in the input with attribute name: hme-label
    const input = await frame.$('input[name="hme-label"]');
    
    // Type the generated label in the input
    await input.type('myemail');
    
    // Click on the save button with text content: Create email address
    await frame.click('button:has-text("Create email address")');
    
    // Click on the close button with text content: Back
    await frame.click('button:has-text("Back")');
    
    // Close the browser
    await browser.close();
}

generate_mail();
