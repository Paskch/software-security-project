const ResearchDAO = require("../data/research-dao").ResearchDAO;
const needle = require("needle");
const {
    environmentalScripts
} = require("../../config/config");

const BASE_URL = process.env.YAHOO_FINANCE_URL || "https://finance.yahoo.com/quote/";
const SYMBOL_REGEX = /^[A-Z]{1,5}$/;

function ResearchHandler(db) {
    "use strict";

 
    const researchDAO = new ResearchDAO(db);

    this.displayResearch = (req, res) => {
        const symbol = req.query.symbol;

        if (req.query.symbol) {
            const url = req.query.url + req.query.symbol;
            
            if (symbol && SYMBOL_REGEX.test(symbol)) {
            const url = BASE_URL + symbol;

            return needle.get(url, (error, newResponse, body) => {
                res.writeHead(200, { "Content-Type": "text/html" });

                if (!error && newResponse.statusCode === 200) {
                    res.write("<h1>The following is the stock information you requested.</h1>\n\n");
                    res.write(body || "");
                } else {
                    res.write("<h2>Unable to fetch stock information.</h2>");
                }

                return res.end();
            });
        }

        return res.render("research", {
            environmentalScripts
        });
    };

}
}

module.exports = ResearchHandler;