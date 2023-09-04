const buttons = await page.$$('.unstyled-button tile-button')
    // //click on the first button
    // await buttons[0].click()
    // //wait for 2 seconds
    // await page.waitFor(2000)
    // //goto iframe
    // const frame = await page.frames().find(f => f.name() === 'iframe')
    // //switch to iframe
    // //click on the Add button containing class : button button-icon-only button-rounded-rectangle
    // await frame.click('.button button-icon-only button-rounded-rectangle')
    // // get text content of div in iframe with class : Typography GeneratedEmail-hme Typography-semibold
    // const generated_email = await frame.$eval('.Typography GeneratedEmail-hme Typography-semibold', el => el.textContent)
    // // add a lable to email in input with attribute name: hme-label
    // const input = await frame.$('input[name="hme-label"]')
    // // type the generated label in the input
    // await input.type('myemail')
    // // click on the save button with textcontent : Create email address
    // await frame.click('button:has-text("Create email address")')
    // //click on the close button with textContent : Back
    // await frame.click('button:has-text("Back")')