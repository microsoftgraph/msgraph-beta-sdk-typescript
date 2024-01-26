# Microsoft Graph SDK for Typescript

Get started with the Microsoft Graph SDK for Typescript by integrating the [Microsoft Graph API](https://docs.microsoft.com/graph/overview) into your Typescript application!

> **Note:** this SDK allows you to build applications using the [beta](https://docs.microsoft.com/graph/use-the-api#version) of Microsoft Graph. If you want to try the latest Microsoft Graph APIs.
>
> **Note:** the Microsoft Graph Typescript SDK is currently in Pre-Release.

## 1. Installation

```shell
# this will install the main package
npm install @microsoft/msgraph-beta-sdk
# this will install the authentication provider for Azure Identity / Microsoft Entra
npm install @microsoft/kiota-authentication-azure @azure/identity
# this will install the fluent API package for the users API paths
npm install @microsoft/msgraph-beta-sdk-users
```

## 2. Getting started

> Note: we are working to add the getting started information for Typescript to our public documentation, in the meantime the following sample should help you getting started.

### 2.1 Register your application

Register your application by following the steps at [Register your app with the Microsoft Identity Platform](https://docs.microsoft.com/graph/auth-register-app-v2).

### 2.2 Create an AuthenticationProvider object

An instance of the **GraphBetaServiceClient** class handles building client. To create a new instance of this class, you need to provide an instance of **AuthenticationProvider**, which can authenticate requests to Microsoft Graph.

For an example of how to get an authentication provider, see [choose a Microsoft Graph authentication provider](https://docs.microsoft.com/graph/sdks/choose-authentication-providers?tabs=typescript).

### 2.3 Get a Graph Service Client Adapter object

You must get a **GraphBetaServiceClient** object to make requests against the service.

```typescript
const requestAdapter = new FetchRequestAdapter(authProvider);
const graphBetaServiceClient = createGraphBetaServiceClient(requestAdapter);
```

## 3. Make requests against the service

After you have a **GraphBetaServiceClient** that is authenticated, you can begin making calls against the service. The requests against the service look like our [REST API](https://docs.microsoft.com/graph/api/overview?view=graph-rest-1.0).

### 3.1 Get user's detailed information

To retrieve the user's detailed information:

```typescript
import { FetchRequestAdapter } from "@microsoft/kiota-http-fetchlibrary";
import { createGraphBetaServiceClient } from "@microsoft/msgraph-beta-sdk";
import "@microsoft/msgraph-beta-sdk-users";

const requestAdapter = new FetchRequestAdapter(authProvider);
const graphBetaServiceClient = createGraphBetaServiceClient(requestAdapter);

const jane = await graphBetaServiceClient.users.byUserId("jane@contoso.com").get();
```

## 4. Documentation

For more detailed documentation, see:

* [Overview](https://docs.microsoft.com/graph/overview)
* [Collections](https://docs.microsoft.com/graph/sdks/paging)
* [Making requests](https://docs.microsoft.com/graph/sdks/create-requests)
* [Known issues](https://github.com/MicrosoftGraph/msgraph-beta-sdk-typescript/issues)
* [Contributions](https://github.com/microsoftgraph/msgraph-beta-sdk-typescript/blob/main/CONTRIBUTING.md)

## 5. Issues

For known issues, see [issues](https://github.com/MicrosoftGraph/msgraph-beta-sdk-typescript/issues).

## 6. Contributions

The Microsoft Graph SDK is open for contribution. To contribute to this project, see [Contributing](https://github.com/microsoftgraph/msgraph-beta-sdk-typescript/blob/main/CONTRIBUTING.md).

## 7. License

Copyright (c) Microsoft Corporation. All Rights Reserved. Licensed under the [MIT license](LICENSE).

## 8. Third-party notices

[Third-party notices](THIRD%20PARTY%20NOTICES)
