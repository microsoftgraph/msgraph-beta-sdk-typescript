/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createVirtualEventWebinarFromDiscriminatorValue, serializeVirtualEventWebinar, type VirtualEventWebinar } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { PresentersRequestBuilderNavigationMetadata, PresentersRequestBuilderRequestsMetadata, PresentersRequestBuilderUriTemplate, type PresentersRequestBuilder } from './presenters/';
import { RegistrationConfigurationRequestBuilderRequestsMetadata, RegistrationConfigurationRequestBuilderUriTemplate, type RegistrationConfigurationRequestBuilder } from './registrationConfiguration/';
import { RegistrationsRequestBuilderNavigationMetadata, RegistrationsRequestBuilderRequestsMetadata, RegistrationsRequestBuilderUriTemplate, type RegistrationsRequestBuilder } from './registrations/';
import { SessionsRequestBuilderNavigationMetadata, SessionsRequestBuilderRequestsMetadata, SessionsRequestBuilderUriTemplate, type SessionsRequestBuilder } from './sessions/';
import { SessionsWithJoinWebUrlRequestBuilderRequestsMetadata, SessionsWithJoinWebUrlRequestBuilderUriTemplate, type SessionsWithJoinWebUrlRequestBuilder } from './sessionsWithJoinWebUrl/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the webinars property of the microsoft.graph.virtualEventsRoot entity.
 */
export interface VirtualEventWebinarItemRequestBuilder extends BaseRequestBuilder<VirtualEventWebinarItemRequestBuilder> {
    /**
     * Provides operations to manage the presenters property of the microsoft.graph.virtualEvent entity.
     */
    get presenters(): PresentersRequestBuilder;
    /**
     * Provides operations to manage the registrationConfiguration property of the microsoft.graph.virtualEventWebinar entity.
     */
    get registrationConfiguration(): RegistrationConfigurationRequestBuilder;
    /**
     * Provides operations to manage the registrations property of the microsoft.graph.virtualEventWebinar entity.
     */
    get registrations(): RegistrationsRequestBuilder;
    /**
     * Provides operations to manage the sessions property of the microsoft.graph.virtualEvent entity.
     */
    get sessions(): SessionsRequestBuilder;
    /**
     * Delete navigation property webinars for solutions
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Read the properties and relationships of a virtualEventWebinar object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of VirtualEventWebinar
     * @see {@link https://learn.microsoft.com/graph/api/virtualeventwebinar-get?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<VirtualEventWebinarItemRequestBuilderGetQueryParameters> | undefined) : Promise<VirtualEventWebinar | undefined>;
    /**
     * Update the navigation property webinars in solutions
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of VirtualEventWebinar
     */
     patch(body: VirtualEventWebinar, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<VirtualEventWebinar | undefined>;
    /**
     * Provides operations to manage the sessions property of the microsoft.graph.virtualEvent entity.
     * @param joinWebUrl Alternate key of virtualEventSession
     * @returns a sessionsWithJoinWebUrlRequestBuilder
     */
     sessionsWithJoinWebUrl(joinWebUrl: string | undefined) : SessionsWithJoinWebUrlRequestBuilder;
    /**
     * Delete navigation property webinars for solutions
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Read the properties and relationships of a virtualEventWebinar object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<VirtualEventWebinarItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property webinars in solutions
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPatchRequestInformation(body: VirtualEventWebinar, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Read the properties and relationships of a virtualEventWebinar object.
 */
export interface VirtualEventWebinarItemRequestBuilderGetQueryParameters {
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Select properties to be returned
     */
    select?: string[];
}
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const VirtualEventWebinarItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const VirtualEventWebinarItemRequestBuilderNavigationMetadata: Record<Exclude<keyof VirtualEventWebinarItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    sessionsWithJoinWebUrl: {
        uriTemplate: SessionsWithJoinWebUrlRequestBuilderUriTemplate,
        requestsMetadata: SessionsWithJoinWebUrlRequestBuilderRequestsMetadata,
    },
    presenters: {
        uriTemplate: PresentersRequestBuilderUriTemplate,
        requestsMetadata: PresentersRequestBuilderRequestsMetadata,
        navigationMetadata: PresentersRequestBuilderNavigationMetadata,
    },
    registrationConfiguration: {
        uriTemplate: RegistrationConfigurationRequestBuilderUriTemplate,
        requestsMetadata: RegistrationConfigurationRequestBuilderRequestsMetadata,
    },
    registrations: {
        uriTemplate: RegistrationsRequestBuilderUriTemplate,
        requestsMetadata: RegistrationsRequestBuilderRequestsMetadata,
        navigationMetadata: RegistrationsRequestBuilderNavigationMetadata,
    },
    sessions: {
        uriTemplate: SessionsRequestBuilderUriTemplate,
        requestsMetadata: SessionsRequestBuilderRequestsMetadata,
        navigationMetadata: SessionsRequestBuilderNavigationMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const VirtualEventWebinarItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContentAsync",
    },
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createVirtualEventWebinarFromDiscriminatorValue,
        queryParametersMapper: VirtualEventWebinarItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createVirtualEventWebinarFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeVirtualEventWebinar,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const VirtualEventWebinarItemRequestBuilderUriTemplate = "{+baseurl}/solutions/virtualEvents/webinars/{virtualEventWebinar%2Did}{?%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */