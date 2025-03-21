/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createDirectoryObjectCollectionResponseFromDiscriminatorValue, createDirectoryObjectFromDiscriminatorValue, serializeDirectoryObject, type DirectoryObject, type DirectoryObjectCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { CountRequestBuilderRequestsMetadata, type CountRequestBuilder } from './count/index.js';
// @ts-ignore
import { DirectoryObjectItemRequestBuilderNavigationMetadata, type DirectoryObjectItemRequestBuilder } from './item/index.js';
// @ts-ignore
import { RefRequestBuilderRequestsMetadata, type RefRequestBuilder } from './ref/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the appliesTo property of the microsoft.graph.featureRolloutPolicy entity.
 */
export interface AppliesToRequestBuilder extends BaseRequestBuilder<AppliesToRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     * @deprecated Feature Rollout Policies have been grouped with other policies under /policies. The existing /directory/featureRolloutPolicies is deprecated and will stop returning data on 06/30/2021. Please use /policies/featureRolloutPolicies. as of 2021-01/DirectoryFeatureRolloutPolicies on 2021-03-05 and will be removed 2021-06-30
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the collection of directory entities.
     * @deprecated Feature Rollout Policies have been grouped with other policies under /policies. The existing /directory/featureRolloutPolicies is deprecated and will stop returning data on 06/30/2021. Please use /policies/featureRolloutPolicies. as of 2021-01/DirectoryFeatureRolloutPolicies on 2021-03-05 and will be removed 2021-06-30
     */
    get ref(): RefRequestBuilder;
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.directory.featureRolloutPolicies.item.appliesTo.item collection
     * @param directoryObjectId The unique identifier of directoryObject
     * @returns {DirectoryObjectItemRequestBuilder}
     */
     byDirectoryObjectId(directoryObjectId: string) : DirectoryObjectItemRequestBuilder;
    /**
     * Nullable. Specifies a list of directoryObject resources that feature is enabled for.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<DirectoryObjectCollectionResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @deprecated Feature Rollout Policies have been grouped with other policies under /policies. The existing /directory/featureRolloutPolicies is deprecated and will stop returning data on 06/30/2021. Please use /policies/featureRolloutPolicies. as of 2021-01/DirectoryFeatureRolloutPolicies on 2021-03-05 and will be removed 2021-06-30
     */
     get(requestConfiguration?: RequestConfiguration<AppliesToRequestBuilderGetQueryParameters> | undefined) : Promise<DirectoryObjectCollectionResponse | undefined>;
    /**
     * Create new navigation property to appliesTo for directory
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<DirectoryObject>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @deprecated Feature Rollout Policies have been grouped with other policies under /policies. The existing /directory/featureRolloutPolicies is deprecated and will stop returning data on 06/30/2021. Please use /policies/featureRolloutPolicies. as of 2021-01/DirectoryFeatureRolloutPolicies on 2021-03-05 and will be removed 2021-06-30
     */
     post(body: DirectoryObject, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<DirectoryObject | undefined>;
    /**
     * Nullable. Specifies a list of directoryObject resources that feature is enabled for.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     * @deprecated Feature Rollout Policies have been grouped with other policies under /policies. The existing /directory/featureRolloutPolicies is deprecated and will stop returning data on 06/30/2021. Please use /policies/featureRolloutPolicies. as of 2021-01/DirectoryFeatureRolloutPolicies on 2021-03-05 and will be removed 2021-06-30
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<AppliesToRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create new navigation property to appliesTo for directory
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     * @deprecated Feature Rollout Policies have been grouped with other policies under /policies. The existing /directory/featureRolloutPolicies is deprecated and will stop returning data on 06/30/2021. Please use /policies/featureRolloutPolicies. as of 2021-01/DirectoryFeatureRolloutPolicies on 2021-03-05 and will be removed 2021-06-30
     */
     toPostRequestInformation(body: DirectoryObject, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Nullable. Specifies a list of directoryObject resources that feature is enabled for.
 */
export interface AppliesToRequestBuilderGetQueryParameters {
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
export const AppliesToRequestBuilderUriTemplate = "{+baseurl}/directory/featureRolloutPolicies/{featureRolloutPolicy%2Did}/appliesTo{?%24count,%24expand,%24filter,%24orderby,%24search,%24select,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const AppliesToRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const AppliesToRequestBuilderNavigationMetadata: Record<Exclude<keyof AppliesToRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byDirectoryObjectId: {
        navigationMetadata: DirectoryObjectItemRequestBuilderNavigationMetadata,
        pathParametersMappings: ["directoryObject%2Did"],
    },
    count: {
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
    ref: {
        requestsMetadata: RefRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const AppliesToRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: AppliesToRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createDirectoryObjectCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: AppliesToRequestBuilderGetQueryParametersMapper,
    },
    post: {
        uriTemplate: AppliesToRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createDirectoryObjectFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeDirectoryObject,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
