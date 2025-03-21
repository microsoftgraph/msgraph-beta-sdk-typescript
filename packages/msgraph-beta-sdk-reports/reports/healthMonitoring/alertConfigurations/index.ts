/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createAlertConfigurationCollectionResponseFromDiscriminatorValue, createAlertConfigurationFromDiscriminatorValue, serializeAlertConfiguration, type AlertConfiguration, type AlertConfigurationCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/healthMonitoring/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { CountRequestBuilderRequestsMetadata, type CountRequestBuilder } from './count/index.js';
// @ts-ignore
import { AlertConfigurationItemRequestBuilderRequestsMetadata, type AlertConfigurationItemRequestBuilder } from './item/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the alertConfigurations property of the microsoft.graph.healthMonitoring.healthMonitoringRoot entity.
 */
export interface AlertConfigurationsRequestBuilder extends BaseRequestBuilder<AlertConfigurationsRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the alertConfigurations property of the microsoft.graph.healthMonitoring.healthMonitoringRoot entity.
     * @param alertConfigurationId The unique identifier of alertConfiguration
     * @returns {AlertConfigurationItemRequestBuilder}
     */
     byAlertConfigurationId(alertConfigurationId: string) : AlertConfigurationItemRequestBuilder;
    /**
     * Get a list of the Microsoft Entra health monitoring alertConfiguration objects and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<AlertConfigurationCollectionResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/healthmonitoring-healthmonitoringroot-list-alertconfigurations?view=graph-rest-beta|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<AlertConfigurationsRequestBuilderGetQueryParameters> | undefined) : Promise<AlertConfigurationCollectionResponse | undefined>;
    /**
     * Create new navigation property to alertConfigurations for reports
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<AlertConfiguration>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: AlertConfiguration, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<AlertConfiguration | undefined>;
    /**
     * Get a list of the Microsoft Entra health monitoring alertConfiguration objects and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<AlertConfigurationsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create new navigation property to alertConfigurations for reports
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: AlertConfiguration, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get a list of the Microsoft Entra health monitoring alertConfiguration objects and their properties.
 */
export interface AlertConfigurationsRequestBuilderGetQueryParameters {
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
 * Uri template for the request builder.
 */
export const AlertConfigurationsRequestBuilderUriTemplate = "{+baseurl}/reports/healthMonitoring/alertConfigurations{?%24count,%24expand,%24filter,%24orderby,%24search,%24select,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const AlertConfigurationsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const AlertConfigurationsRequestBuilderNavigationMetadata: Record<Exclude<keyof AlertConfigurationsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byAlertConfigurationId: {
        requestsMetadata: AlertConfigurationItemRequestBuilderRequestsMetadata,
        pathParametersMappings: ["alertConfiguration%2Did"],
    },
    count: {
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const AlertConfigurationsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: AlertConfigurationsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createAlertConfigurationCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: AlertConfigurationsRequestBuilderGetQueryParametersMapper,
    },
    post: {
        uriTemplate: AlertConfigurationsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createAlertConfigurationFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeAlertConfiguration,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
