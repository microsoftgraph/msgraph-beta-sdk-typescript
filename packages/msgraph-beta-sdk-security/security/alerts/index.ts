/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createAlertCollectionResponseFromDiscriminatorValue, createAlertFromDiscriminatorValue, serializeAlert, type Alert, type AlertCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { CountRequestBuilderRequestsMetadata, CountRequestBuilderUriTemplate, type CountRequestBuilder } from './count/';
import { AlertItemRequestBuilderRequestsMetadata, AlertItemRequestBuilderUriTemplate, type AlertItemRequestBuilder } from './item/';
import { type UpdateAlertsRequestBuilder, UpdateAlertsRequestBuilderRequestsMetadata, UpdateAlertsRequestBuilderUriTemplate } from './updateAlerts/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the alerts property of the microsoft.graph.security entity.
 */
export interface AlertsRequestBuilder extends BaseRequestBuilder<AlertsRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to call the updateAlerts method.
     */
    get updateAlerts(): UpdateAlertsRequestBuilder;
    /**
     * Provides operations to manage the alerts property of the microsoft.graph.security entity.
     * @param alertId The unique identifier of alert
     * @returns a AlertItemRequestBuilder
     */
     byAlertId(alertId: string) : AlertItemRequestBuilder;
    /**
     * Retrieve a list of alert objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AlertCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/alert-list?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<AlertsRequestBuilderGetQueryParameters> | undefined) : Promise<AlertCollectionResponse | undefined>;
    /**
     * Create new navigation property to alerts for security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Alert
     */
     post(body: Alert, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<Alert | undefined>;
    /**
     * Retrieve a list of alert objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<AlertsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create new navigation property to alerts for security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: Alert, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Retrieve a list of alert objects.
 */
export interface AlertsRequestBuilderGetQueryParameters {
    /**
     * Include count of items
     */
    count?: boolean;
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Filter items by property values
     */
    filter?: string;
    /**
     * Order items by property values
     */
    orderby?: string[];
    /**
     * Search items by search phrases
     */
    search?: string;
    /**
     * Select properties to be returned
     */
    select?: string[];
    /**
     * Skip the first n items
     */
    skip?: number;
    /**
     * Show only the first n items
     */
    top?: number;
}
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const AlertsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "count": "%24count",
    "expand": "%24expand",
    "filter": "%24filter",
    "orderby": "%24orderby",
    "search": "%24search",
    "select": "%24select",
    "skip": "%24skip",
    "top": "%24top",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const AlertsRequestBuilderNavigationMetadata: Record<Exclude<keyof AlertsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byAlertId: {
        uriTemplate: AlertItemRequestBuilderUriTemplate,
        requestsMetadata: AlertItemRequestBuilderRequestsMetadata,
        pathParametersMappings: ["alert%2Did"],
    },
    count: {
        uriTemplate: CountRequestBuilderUriTemplate,
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
    updateAlerts: {
        uriTemplate: UpdateAlertsRequestBuilderUriTemplate,
        requestsMetadata: UpdateAlertsRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const AlertsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createAlertCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: AlertsRequestBuilderGetQueryParametersMapper,
    },
    post: {
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
export const AlertsRequestBuilderUriTemplate = "{+baseurl}/security/alerts{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */