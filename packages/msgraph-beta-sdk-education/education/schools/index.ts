/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createEducationSchoolCollectionResponseFromDiscriminatorValue, createEducationSchoolFromDiscriminatorValue, serializeEducationSchool, type EducationSchool, type EducationSchoolCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { CountRequestBuilderRequestsMetadata, CountRequestBuilderUriTemplate, type CountRequestBuilder } from './count/';
import { DeltaRequestBuilderRequestsMetadata, DeltaRequestBuilderUriTemplate, type DeltaRequestBuilder } from './delta/';
import { EducationSchoolItemRequestBuilderNavigationMetadata, EducationSchoolItemRequestBuilderRequestsMetadata, EducationSchoolItemRequestBuilderUriTemplate, type EducationSchoolItemRequestBuilder } from './item/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the schools property of the microsoft.graph.educationRoot entity.
 */
export interface SchoolsRequestBuilder extends BaseRequestBuilder<SchoolsRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to call the delta method.
     */
    get delta(): DeltaRequestBuilder;
    /**
     * Provides operations to manage the schools property of the microsoft.graph.educationRoot entity.
     * @param educationSchoolId The unique identifier of educationSchool
     * @returns a EducationSchoolItemRequestBuilder
     */
     byEducationSchoolId(educationSchoolId: string) : EducationSchoolItemRequestBuilder;
    /**
     * Retrieve a list of all school objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of EducationSchoolCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/educationroot-list-schools?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<SchoolsRequestBuilderGetQueryParameters> | undefined) : Promise<EducationSchoolCollectionResponse | undefined>;
    /**
     * Create a school.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of EducationSchool
     * @see {@link https://learn.microsoft.com/graph/api/educationroot-post-schools?view=graph-rest-1.0|Find more info here}
     */
     post(body: EducationSchool, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<EducationSchool | undefined>;
    /**
     * Retrieve a list of all school objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<SchoolsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create a school.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: EducationSchool, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Retrieve a list of all school objects.
 */
export interface SchoolsRequestBuilderGetQueryParameters {
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
const SchoolsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const SchoolsRequestBuilderNavigationMetadata: Record<Exclude<keyof SchoolsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byEducationSchoolId: {
        uriTemplate: EducationSchoolItemRequestBuilderUriTemplate,
        requestsMetadata: EducationSchoolItemRequestBuilderRequestsMetadata,
        navigationMetadata: EducationSchoolItemRequestBuilderNavigationMetadata,
        pathParametersMappings: ["educationSchool%2Did"],
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
export const SchoolsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createEducationSchoolCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: SchoolsRequestBuilderGetQueryParametersMapper,
    },
    post: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createEducationSchoolFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeEducationSchool,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const SchoolsRequestBuilderUriTemplate = "{+baseurl}/education/schools{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */