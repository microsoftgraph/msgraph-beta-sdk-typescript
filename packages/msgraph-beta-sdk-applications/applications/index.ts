/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createApplicationCollectionResponseFromDiscriminatorValue, createApplicationFromDiscriminatorValue, serializeApplication, type Application, type ApplicationCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { CountRequestBuilderRequestsMetadata, CountRequestBuilderUriTemplate, type CountRequestBuilder } from './count/';
import { DeltaRequestBuilderRequestsMetadata, DeltaRequestBuilderUriTemplate, type DeltaRequestBuilder } from './delta/';
import { GetByIdsRequestBuilderRequestsMetadata, GetByIdsRequestBuilderUriTemplate, type GetByIdsRequestBuilder } from './getByIds/';
import { GetUserOwnedObjectsRequestBuilderRequestsMetadata, GetUserOwnedObjectsRequestBuilderUriTemplate, type GetUserOwnedObjectsRequestBuilder } from './getUserOwnedObjects/';
import { ApplicationItemRequestBuilderNavigationMetadata, ApplicationItemRequestBuilderRequestsMetadata, ApplicationItemRequestBuilderUriTemplate, type ApplicationItemRequestBuilder } from './item/';
import { type ValidatePropertiesRequestBuilder, ValidatePropertiesRequestBuilderRequestsMetadata, ValidatePropertiesRequestBuilderUriTemplate } from './validateProperties/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the collection of application entities.
 */
export interface ApplicationsRequestBuilder extends BaseRequestBuilder<ApplicationsRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to call the delta method.
     */
    get delta(): DeltaRequestBuilder;
    /**
     * Provides operations to call the getByIds method.
     */
    get getByIds(): GetByIdsRequestBuilder;
    /**
     * Provides operations to call the getUserOwnedObjects method.
     */
    get getUserOwnedObjects(): GetUserOwnedObjectsRequestBuilder;
    /**
     * Provides operations to call the validateProperties method.
     */
    get validateProperties(): ValidatePropertiesRequestBuilder;
    /**
     * Provides operations to manage the collection of application entities.
     * @param applicationId The unique identifier of application
     * @returns a ApplicationItemRequestBuilder
     */
     byApplicationId(applicationId: string) : ApplicationItemRequestBuilder;
    /**
     * Get the list of applications in this organization.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ApplicationCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/application-list?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<ApplicationsRequestBuilderGetQueryParameters> | undefined) : Promise<ApplicationCollectionResponse | undefined>;
    /**
     * Create a new application object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Application
     * @see {@link https://learn.microsoft.com/graph/api/application-post-applications?view=graph-rest-1.0|Find more info here}
     */
     post(body: Application, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<Application | undefined>;
    /**
     * Get the list of applications in this organization.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<ApplicationsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create a new application object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: Application, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get the list of applications in this organization.
 */
export interface ApplicationsRequestBuilderGetQueryParameters {
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
const ApplicationsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const ApplicationsRequestBuilderNavigationMetadata: Record<Exclude<keyof ApplicationsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byApplicationId: {
        uriTemplate: ApplicationItemRequestBuilderUriTemplate,
        requestsMetadata: ApplicationItemRequestBuilderRequestsMetadata,
        navigationMetadata: ApplicationItemRequestBuilderNavigationMetadata,
        pathParametersMappings: ["application%2Did"],
    },
    count: {
        uriTemplate: CountRequestBuilderUriTemplate,
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
    delta: {
        uriTemplate: DeltaRequestBuilderUriTemplate,
        requestsMetadata: DeltaRequestBuilderRequestsMetadata,
    },
    getByIds: {
        uriTemplate: GetByIdsRequestBuilderUriTemplate,
        requestsMetadata: GetByIdsRequestBuilderRequestsMetadata,
    },
    getUserOwnedObjects: {
        uriTemplate: GetUserOwnedObjectsRequestBuilderUriTemplate,
        requestsMetadata: GetUserOwnedObjectsRequestBuilderRequestsMetadata,
    },
    validateProperties: {
        uriTemplate: ValidatePropertiesRequestBuilderUriTemplate,
        requestsMetadata: ValidatePropertiesRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const ApplicationsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createApplicationCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: ApplicationsRequestBuilderGetQueryParametersMapper,
    },
    post: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createApplicationFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeApplication,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const ApplicationsRequestBuilderUriTemplate = "{+baseurl}/applications{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */