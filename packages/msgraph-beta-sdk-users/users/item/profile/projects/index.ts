/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createProjectParticipationCollectionResponseFromDiscriminatorValue, createProjectParticipationFromDiscriminatorValue, serializeProjectParticipation, type ProjectParticipation, type ProjectParticipationCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { CountRequestBuilderRequestsMetadata, CountRequestBuilderUriTemplate, type CountRequestBuilder } from './count/';
import { ProjectParticipationItemRequestBuilderRequestsMetadata, ProjectParticipationItemRequestBuilderUriTemplate, type ProjectParticipationItemRequestBuilder } from './item/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the projects property of the microsoft.graph.profile entity.
 */
export interface ProjectsRequestBuilder extends BaseRequestBuilder<ProjectsRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the projects property of the microsoft.graph.profile entity.
     * @param projectParticipationId The unique identifier of projectParticipation
     * @returns a ProjectParticipationItemRequestBuilder
     */
     byProjectParticipationId(projectParticipationId: string) : ProjectParticipationItemRequestBuilder;
    /**
     * Retrieve a list of projectParticipation objects from a user's profile.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ProjectParticipationCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/profile-list-projects?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<ProjectsRequestBuilderGetQueryParameters> | undefined) : Promise<ProjectParticipationCollectionResponse | undefined>;
    /**
     * Use this API to create a new projectParticipation object in a user's profile.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ProjectParticipation
     * @see {@link https://learn.microsoft.com/graph/api/profile-post-projects?view=graph-rest-1.0|Find more info here}
     */
     post(body: ProjectParticipation, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<ProjectParticipation | undefined>;
    /**
     * Retrieve a list of projectParticipation objects from a user's profile.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<ProjectsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Use this API to create a new projectParticipation object in a user's profile.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: ProjectParticipation, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Retrieve a list of projectParticipation objects from a user's profile.
 */
export interface ProjectsRequestBuilderGetQueryParameters {
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
const ProjectsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const ProjectsRequestBuilderNavigationMetadata: Record<Exclude<keyof ProjectsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byProjectParticipationId: {
        uriTemplate: ProjectParticipationItemRequestBuilderUriTemplate,
        requestsMetadata: ProjectParticipationItemRequestBuilderRequestsMetadata,
        pathParametersMappings: ["projectParticipation%2Did"],
    },
    count: {
        uriTemplate: CountRequestBuilderUriTemplate,
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const ProjectsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createProjectParticipationCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: ProjectsRequestBuilderGetQueryParametersMapper,
    },
    post: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createProjectParticipationFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeProjectParticipation,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const ProjectsRequestBuilderUriTemplate = "{+baseurl}/users/{user%2Did}/profile/projects{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */