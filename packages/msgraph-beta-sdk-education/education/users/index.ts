/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createEducationUserCollectionResponseFromDiscriminatorValue, createEducationUserFromDiscriminatorValue, serializeEducationUser, type EducationUser, type EducationUserCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { CountRequestBuilderRequestsMetadata, CountRequestBuilderUriTemplate, type CountRequestBuilder } from './count/';
import { DeltaRequestBuilderRequestsMetadata, DeltaRequestBuilderUriTemplate, type DeltaRequestBuilder } from './delta/';
import { EducationUserItemRequestBuilderNavigationMetadata, EducationUserItemRequestBuilderRequestsMetadata, EducationUserItemRequestBuilderUriTemplate, type EducationUserItemRequestBuilder } from './item/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the users property of the microsoft.graph.educationRoot entity.
 */
export interface UsersRequestBuilder extends BaseRequestBuilder<UsersRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to call the delta method.
     */
    get delta(): DeltaRequestBuilder;
    /**
     * Provides operations to manage the users property of the microsoft.graph.educationRoot entity.
     * @param educationUserId The unique identifier of educationUser
     * @returns a EducationUserItemRequestBuilder
     */
     byEducationUserId(educationUserId: string) : EducationUserItemRequestBuilder;
    /**
     * Retrieve a list of user objects. These user objects will include education-specific properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of EducationUserCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/educationroot-list-users?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<UsersRequestBuilderGetQueryParameters> | undefined) : Promise<EducationUserCollectionResponse | undefined>;
    /**
     * Create a new user.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of EducationUser
     * @see {@link https://learn.microsoft.com/graph/api/educationroot-post-users?view=graph-rest-1.0|Find more info here}
     */
     post(body: EducationUser, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<EducationUser | undefined>;
    /**
     * Retrieve a list of user objects. These user objects will include education-specific properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<UsersRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create a new user.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: EducationUser, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Retrieve a list of user objects. These user objects will include education-specific properties.
 */
export interface UsersRequestBuilderGetQueryParameters {
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
const UsersRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const UsersRequestBuilderNavigationMetadata: Record<Exclude<keyof UsersRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byEducationUserId: {
        uriTemplate: EducationUserItemRequestBuilderUriTemplate,
        requestsMetadata: EducationUserItemRequestBuilderRequestsMetadata,
        navigationMetadata: EducationUserItemRequestBuilderNavigationMetadata,
        pathParametersMappings: ["educationUser%2Did"],
    },
    count: {
        uriTemplate: CountRequestBuilderUriTemplate,
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
    delta: {
        uriTemplate: DeltaRequestBuilderUriTemplate,
        requestsMetadata: DeltaRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const UsersRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createEducationUserCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: UsersRequestBuilderGetQueryParametersMapper,
    },
    post: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createEducationUserFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeEducationUser,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const UsersRequestBuilderUriTemplate = "{+baseurl}/education/users{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */