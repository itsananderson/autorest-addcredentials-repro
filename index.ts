import FooClient = require("./lib/autorest/FooClient");

import { TokenCredentials } from "ms-rest";

new FooClient(new TokenCredentials("abc"), "http://foo.com", {});
