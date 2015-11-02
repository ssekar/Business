/**
 * Developer: Satish Sekar
 * Main config file
 */
bbyc.common.value('Config',
    {
        root: "http://www.bestbuy.ca",
        pages: {
            CommonView: {
                enable: true,
                pageName  : "landing.html"
            },
            DialogView: {
                enable: false,
                pageName: "dialog.html"
            }
        },
        services: {
            type: "REST",
            api: "yd8e6hx9u6f4nckyn3jexy5e", // This is my Developer API for bestbuy.com (however we won't need it for this assessment)
            root: "http://www.bestbuy.ca/api/v2/json/",
            endpoint: {
                categories: {
                    path: "category/Departments"
                },
                products: {
                    filter: {
                        path: "search?categoryid="
                    },
                    details: {
                        path: "product/{sku}"
                    }
                }
            }
        }
    }
);