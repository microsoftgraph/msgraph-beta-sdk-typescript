/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createAlertFromDiscriminatorValue, serializeAlert, type Alert } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the alerts property of the microsoft.graph.security entity.
 */
export interface AlertItemRequestBuilder extends BaseRequestBuilder<AlertItemRequestBuilder> {
    /**
     * Retrieve the properties and relationships of an alert object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Alert
     * @see {@link https://learn.microsoft.com/graph/api/alert-get?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<AlertItemRequestBuilderGetQueryParameters> | undefined) : Promise<Alert | undefined>;
    /**
     * Update an editable alert property within any integrated solution to keep alert status and assignments in sync across solutions. This method updates any solution that has a record of the referenced alert ID.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Alert
     * @see {@link https://learn.microsoft.com/graph/api/alert-update?view=graph-rest-1.0|Find more info here}
     */
     patch(body: Alert, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<Alert | undefined>;
    /**
     * Retrieve the properties and relationships of an alert object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<AlertItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update an editable alert property within any integrated solution to keep alert status and assignments in sync across solutions. This method updates any solution that has a record of the referenced alert ID.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPatchRequestInformation(body: Alert, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Retrieve the properties and relationships of an alert object.
 */
export interface AlertItemRequestBuilderGetQueryParameters {
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
const AlertItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const AlertItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createAlertFromDiscriminatorValue,
        queryParametersMapper: AlertItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createAlertFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeAlert,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const AlertItemRequestBuilderUriTemplate = "{+baseurl}/security/alerts/{alert%2Did}{?%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */