const {setGlobalOptions} = require("firebase-functions");
const {onRequest} = require("firebase-functions/https");
const logger = require("firebase-functions/logger");
const express = require("express");
const cors = require("cors");
const dotenv =  require("dotenv");
dotenv.config();
const stripe  = require("stripe")(process.env.STRIPE_KEY )

setGlobalOptions({ maxInstances: 10 });
