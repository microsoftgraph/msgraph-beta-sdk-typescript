/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createUserConfigurationCollectionResponseFromDiscriminatorValue, type UserConfigurationCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { CountRequestBuilderRequestsMetadata, type CountRequestBuilder } from './count/index.js';
// @ts-ignore
import { type UserConfigurationItemRequestBuilder, UserConfigurationItemRequestBuilderRequestsMetadata } from './item/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the userConfigurations property of the microsoft.graph.mailFolder entity.
 */
export interface UserConfigurationsRequestBuilder extends BaseRequestBuilder<UserConfigurationsRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     * @deprecated  as of 2024-07/PrivatePreview:copilotExportAPI
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the userConfigurations property of the microsoft.graph.mailFolder entity.
     * @param userConfigurationId The unique identifier of userConfiguration
     * @returns {UserConfigurationItemRequestBuilder}
     * @deprecated  as of 2024-07/PrivatePreview:copilotExportAPI
     */
     byUserConfigurationId(userConfigurationId: string) : UserConfigurationItemRequestBuilder;
    /**
     * Get userConfigurations from users
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<UserConfigurationCollectionResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @deprecated  as of 2024-07/PrivatePreview:copilotExportAPI
     */
     get(requestConfiguration?: RequestConfiguration<UserConfigurationsRequestBuilderGetQueryParameters> | undefined) : Promise<UserConfigurationCollectionResponse | undefined>;
    /**
     * Get userConfigurations from users
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     * @deprecated  as of 2024-07/PrivatePreview:copilotExportAPI
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<UserConfigurationsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
}
/**
 * Get userConfigurations from users
 */
export interface UserConfigurationsRequestBuilderGetQueryParameters {
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
export const UserConfigurationsRequestBuilderUriTemplate = "{+baseurl}/users/{user%2Did}/mailFolders/{mailFolder%2Did}/userConfigurations{?%24count,%24expand,%24filter,%24orderby,%24search,%24select,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const UserConfigurationsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const UserConfigurationsRequestBuilderNavigationMetadata: Record<Exclude<keyof UserConfigurationsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byUserConfigurationId: {
        requestsMetadata: UserConfigurationItemRequestBuilderRequestsMetadata,
        pathParametersMappings: ["userConfiguration%2Did"],
    },
    count: {
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const UserConfigurationsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: UserConfigurationsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createUserConfigurationCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: UserConfigurationsRequestBuilderGetQueryParametersMapper,
    },
};
/* tslint:enable */
/* eslint-enable */
