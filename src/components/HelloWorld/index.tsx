/* eslint-disable prettier/prettier */
import React from "react";

const HelloWorld = () => (
    <>
        <h1>Hello World</h1>
        <hr />
        <h3>Env variables:</h3>
        <p>
            {process.env.NAME}
        </p>
        <p>
            {process.env.VERSION}
        </p>
        <p>
            {process.env.API_LINK_BASE}
        </p>
    </>
)

export default HelloWorld;