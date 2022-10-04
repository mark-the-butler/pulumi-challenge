// Deploy Website to S3 with CloudFront
// Also shows the challenger how to build a ComponentResource
import { CdnWebsite } from "./cdn-website";

const website = new CdnWebsite("DevOps-Butler", {});

export const url = website.url;

// Monitoring with Checkly
// Demonstrates Standard Package usage
import * as checkly from "@checkly/pulumi";
import * as fs from "fs";

new checkly.Check("index-page", {
    activated: true,
    frequency: 10,
    type: "BROWSER",
    locations: ["us-east-2"],
    script: url.apply((url) => 
        fs
            .readFileSync("checkly-embed.js")
            .toString("utf8")
            .replace("{{websiteUrl}}", url)
    ),
});

import { Swag } from "./swag-provider";

const swag = new Swag("Devops-Butler", {
    name: "Mark Butler",
    email: "mysteryboy7300@gmail.com",
    address: "472 E 329th St. Willowick, Ohio 44095",
    size: "M",
});
