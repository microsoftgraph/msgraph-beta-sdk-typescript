/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createAzureADAuthenticationFromDiscriminatorValue, serializeAzureADAuthentication, type AzureADAuthentication } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the azureADAuthentication property of the microsoft.graph.serviceLevelAgreementRoot entity.
 */
export interface AzureADAuthenticationRequestBuilder extends BaseRequestBuilder<AzureADAuthenticationRequestBuilder> {
    /**
     * Delete navigation property azureADAuthentication for reports
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Read the properties and relationships of an azureADAuthentication object to find the level of Microsoft Entra authentication availability for your tenant. The Microsoft Entra service Level Agreement (SLA) commits to at least 99.99% authentication availability, as described in Microsoft Entra SLA performance. This object provides you with your tenant’s actual performance against this commitment.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AzureADAuthentication
     * @see {@link https://learn.microsoft.com/graph/api/azureadauthentication-get?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<AzureADAuthenticationRequestBuilderGetQueryParameters> | undefined) : Promise<AzureADAuthentication | undefined>;
    /**
     * Update the navigation property azureADAuthentication in reports
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AzureADAuthentication
     */
     patch(body: AzureADAuthentication, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<AzureADAuthentication | undefined>;
    /**
     * Delete navigation property azureADAuthentication for reports
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Read the properties and relationships of an azureADAuthentication object to find the level of Microsoft Entra authentication availability for your tenant. The Microsoft Entra service Level Agreement (SLA) commits to at least 99.99% authentication availability, as described in Microsoft Entra SLA performance. This object provides you with your tenant’s actual performance against this commitment.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<AzureADAuthenticationRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property azureADAuthentication in reports
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPatchRequestInformation(body: AzureADAuthentication, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Read the properties and relationships of an azureADAuthentication object to find the level of Microsoft Entra authentication availability for your tenant. The Microsoft Entra service Level Agreement (SLA) commits to at least 99.99% authentication availability, as described in Microsoft Entra SLA performance. This object provides you with your tenant’s actual performance against this commitment.
 */
export interface AzureADAuthenticationRequestBuilderGetQueryParameters {
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Select properties to be returned
     */
    select?: string[];
}
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const AzureADAuthenticationRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const AzureADAuthenticationRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContentAsync",
    },
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createAzureADAuthenticationFromDiscriminatorValue,
        queryParametersMapper: AzureADAuthenticationRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createAzureADAuthenticationFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeAzureADAuthentication,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const AzureADAuthenticationRequestBuilderUriTemplate = "{+baseurl}/reports/sla/azureADAuthentication{?%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */