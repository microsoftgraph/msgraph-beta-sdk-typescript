/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createAccessPackageResourceEnvironmentCollectionResponseFromDiscriminatorValue, createAccessPackageResourceEnvironmentFromDiscriminatorValue, serializeAccessPackageResourceEnvironment, type AccessPackageResourceEnvironment, type AccessPackageResourceEnvironmentCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { CountRequestBuilderRequestsMetadata, CountRequestBuilderUriTemplate, type CountRequestBuilder } from './count/';
import { AccessPackageResourceEnvironmentItemRequestBuilderNavigationMetadata, AccessPackageResourceEnvironmentItemRequestBuilderRequestsMetadata, AccessPackageResourceEnvironmentItemRequestBuilderUriTemplate, type AccessPackageResourceEnvironmentItemRequestBuilder } from './item/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the accessPackageResourceEnvironments property of the microsoft.graph.entitlementManagement entity.
 */
export interface AccessPackageResourceEnvironmentsRequestBuilder extends BaseRequestBuilder<AccessPackageResourceEnvironmentsRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the accessPackageResourceEnvironments property of the microsoft.graph.entitlementManagement entity.
     * @param accessPackageResourceEnvironmentId The unique identifier of accessPackageResourceEnvironment
     * @returns a AccessPackageResourceEnvironmentItemRequestBuilder
     */
     byAccessPackageResourceEnvironmentId(accessPackageResourceEnvironmentId: string) : AccessPackageResourceEnvironmentItemRequestBuilder;
    /**
     * Retrieve a list of accessPackageResourceEnvironment objects and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AccessPackageResourceEnvironmentCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/entitlementmanagement-list-accesspackageresourceenvironment?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<AccessPackageResourceEnvironmentsRequestBuilderGetQueryParameters> | undefined) : Promise<AccessPackageResourceEnvironmentCollectionResponse | undefined>;
    /**
     * Create new navigation property to accessPackageResourceEnvironments for identityGovernance
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AccessPackageResourceEnvironment
     */
     post(body: AccessPackageResourceEnvironment, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<AccessPackageResourceEnvironment | undefined>;
    /**
     * Retrieve a list of accessPackageResourceEnvironment objects and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<AccessPackageResourceEnvironmentsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create new navigation property to accessPackageResourceEnvironments for identityGovernance
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: AccessPackageResourceEnvironment, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Retrieve a list of accessPackageResourceEnvironment objects and their properties.
 */
export interface AccessPackageResourceEnvironmentsRequestBuilderGetQueryParameters {
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
const AccessPackageResourceEnvironmentsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const AccessPackageResourceEnvironmentsRequestBuilderNavigationMetadata: Record<Exclude<keyof AccessPackageResourceEnvironmentsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byAccessPackageResourceEnvironmentId: {
        uriTemplate: AccessPackageResourceEnvironmentItemRequestBuilderUriTemplate,
        requestsMetadata: AccessPackageResourceEnvironmentItemRequestBuilderRequestsMetadata,
        navigationMetadata: AccessPackageResourceEnvironmentItemRequestBuilderNavigationMetadata,
        pathParametersMappings: ["accessPackageResourceEnvironment%2Did"],
    },
    count: {
        uriTemplate: CountRequestBuilderUriTemplate,
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const AccessPackageResourceEnvironmentsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createAccessPackageResourceEnvironmentCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: AccessPackageResourceEnvironmentsRequestBuilderGetQueryParametersMapper,
    },
    post: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createAccessPackageResourceEnvironmentFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeAccessPackageResourceEnvironment,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const AccessPackageResourceEnvironmentsRequestBuilderUriTemplate = "{+baseurl}/identityGovernance/entitlementManagement/accessPackageResourceEnvironments{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */