/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createEducationUserCollectionResponseFromDiscriminatorValue, type EducationUserCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { CountRequestBuilderRequestsMetadata, CountRequestBuilderUriTemplate, type CountRequestBuilder } from './count/';
import { EducationUserItemRequestBuilderNavigationMetadata, EducationUserItemRequestBuilderUriTemplate, type EducationUserItemRequestBuilder } from './item/';
import { RefRequestBuilderRequestsMetadata, RefRequestBuilderUriTemplate, type RefRequestBuilder } from './ref/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the teachers property of the microsoft.graph.educationClass entity.
 */
export interface TeachersRequestBuilder extends BaseRequestBuilder<TeachersRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the collection of educationRoot entities.
     */
    get ref(): RefRequestBuilder;
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.education.classes.item.teachers.item collection
     * @param educationUserId The unique identifier of educationUser
     * @returns a EducationUserItemRequestBuilder
     */
     byEducationUserId(educationUserId: string) : EducationUserItemRequestBuilder;
    /**
     * Retrieve a list of teachers for a class. Delegated tokens must be members of the class to get the teacher list.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of EducationUserCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/educationclass-list-teachers?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<TeachersRequestBuilderGetQueryParameters> | undefined) : Promise<EducationUserCollectionResponse | undefined>;
    /**
     * Retrieve a list of teachers for a class. Delegated tokens must be members of the class to get the teacher list.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<TeachersRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
}
/**
 * Retrieve a list of teachers for a class. Delegated tokens must be members of the class to get the teacher list.
 */
export interface TeachersRequestBuilderGetQueryParameters {
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
const TeachersRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const TeachersRequestBuilderNavigationMetadata: Record<Exclude<keyof TeachersRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byEducationUserId: {
        uriTemplate: EducationUserItemRequestBuilderUriTemplate,
        navigationMetadata: EducationUserItemRequestBuilderNavigationMetadata,
        pathParametersMappings: ["educationUser%2Did"],
    },
    count: {
        uriTemplate: CountRequestBuilderUriTemplate,
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
    ref: {
        uriTemplate: RefRequestBuilderUriTemplate,
        requestsMetadata: RefRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const TeachersRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createEducationUserCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: TeachersRequestBuilderGetQueryParametersMapper,
    },
};
/**
 * Uri template for the request builder.
 */
export const TeachersRequestBuilderUriTemplate = "{+baseurl}/education/classes/{educationClass%2Did}/teachers{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */