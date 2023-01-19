import {beforeAll, afterAll, describe, expect, jest, test} from '@jest/globals';
import puppeteer, { Browser, JSHandle, Page } from "puppeteer";

jest.setTimeout(60*1000);

var browser:Browser;
var currentPage:Page;

describe('Smoke Testing: App One', () => {

    beforeAll(async() => {
        browser = await puppeteer.launch();
        currentPage = await browser.newPage();
    });

    test('app one: start', async () => {
        
        expect.assertions(1);
        await currentPage.goto('http://localhost:5000',{
            waitUntil: 'networkidle2'
        })
        const title = "Contacts Summary";
        const result:JSHandle = await currentPage.waitForFunction(title => {
            const text = document.querySelector("body")?.innerHTML;
            return text && text.includes(title);
        }, {timeout:0},
        title);

        const haveSummaryText = await result.jsonValue();
        expect(haveSummaryText).toBe(true);
        
    })

    test('app one: typing user data', async () => {
          
        await currentPage.type('body input#name[type="text"]', "Gentera", {delay: 100});
        await currentPage.type('body input#mobile[type="text"]', "1234567890", {delay: 100});
        await currentPage.type('body input#email[type="email"]', "hola@gentera.com", {delay: 100});

    })

    test('app one: submit click', async () => {
        await currentPage.click('body button#submit[type="submit"]',{delay: 150});
    })

    test('app one: check data in table', async () => {
        const data = {
            name: "Gentera",
            mobile: "1234567890",
            email: "hola@gentera.com"
        }

        const result:JSHandle = await currentPage.waitForFunction(data => {
            const text = document.querySelector("table#summaryTable")?.innerHTML;
            return text && text.includes(data.name) && text.includes(data.mobile) && text.includes(data.email);
        }, {timeout:0},
        data)

        const haveData = await result.jsonValue();
        expect(haveData).toBe(true);
    })


    afterAll(async () => {
        if(!currentPage.isClosed)
            await currentPage.close();
        await browser.close();
    })

});