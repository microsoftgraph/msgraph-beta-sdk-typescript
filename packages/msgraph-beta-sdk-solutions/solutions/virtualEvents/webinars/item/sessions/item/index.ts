/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createVirtualEventSessionFromDiscriminatorValue, serializeVirtualEventSession, type VirtualEventSession } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { AttendanceReportsRequestBuilderNavigationMetadata, AttendanceReportsRequestBuilderRequestsMetadata, AttendanceReportsRequestBuilderUriTemplate, type AttendanceReportsRequestBuilder } from './attendanceReports/';
import { PresentersRequestBuilderNavigationMetadata, PresentersRequestBuilderRequestsMetadata, PresentersRequestBuilderUriTemplate, type PresentersRequestBuilder } from './presenters/';
import { RegistrationsRequestBuilderNavigationMetadata, RegistrationsRequestBuilderRequestsMetadata, RegistrationsRequestBuilderUriTemplate, type RegistrationsRequestBuilder } from './registrations/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the sessions property of the microsoft.graph.virtualEvent entity.
 */
export interface VirtualEventSessionItemRequestBuilder extends BaseRequestBuilder<VirtualEventSessionItemRequestBuilder> {
    /**
     * Provides operations to manage the attendanceReports property of the microsoft.graph.onlineMeetingBase entity.
     */
    get attendanceReports(): AttendanceReportsRequestBuilder;
    /**
     * Provides operations to manage the presenters property of the microsoft.graph.virtualEventSession entity.
     */
    get presenters(): PresentersRequestBuilder;
    /**
     * Provides operations to manage the registrations property of the microsoft.graph.virtualEventSession entity.
     */
    get registrations(): RegistrationsRequestBuilder;
    /**
     * Delete navigation property sessions for solutions
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Sessions for the virtual event.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of VirtualEventSession
     */
     get(requestConfiguration?: RequestConfiguration<VirtualEventSessionItemRequestBuilderGetQueryParameters> | undefined) : Promise<VirtualEventSession | undefined>;
    /**
     * Update the navigation property sessions in solutions
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of VirtualEventSession
     */
     patch(body: VirtualEventSession, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<VirtualEventSession | undefined>;
    /**
     * Delete navigation property sessions for solutions
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Sessions for the virtual event.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<VirtualEventSessionItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property sessions in solutions
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPatchRequestInformation(body: VirtualEventSession, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Sessions for the virtual event.
 */
export interface VirtualEventSessionItemRequestBuilderGetQueryParameters {
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
const VirtualEventSessionItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const VirtualEventSessionItemRequestBuilderNavigationMetadata: Record<Exclude<keyof VirtualEventSessionItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    attendanceReports: {
        uriTemplate: AttendanceReportsRequestBuilderUriTemplate,
        requestsMetadata: AttendanceReportsRequestBuilderRequestsMetadata,
        navigationMetadata: AttendanceReportsRequestBuilderNavigationMetadata,
    },
    presenters: {
        uriTemplate: PresentersRequestBuilderUriTemplate,
        requestsMetadata: PresentersRequestBuilderRequestsMetadata,
        navigationMetadata: PresentersRequestBuilderNavigationMetadata,
    },
    registrations: {
        uriTemplate: RegistrationsRequestBuilderUriTemplate,
        requestsMetadata: RegistrationsRequestBuilderRequestsMetadata,
        navigationMetadata: RegistrationsRequestBuilderNavigationMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const VirtualEventSessionItemRequestBuilderRequestsMetadata: RequestsMetadata = {
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
        responseBodyFactory:  createVirtualEventSessionFromDiscriminatorValue,
        queryParametersMapper: VirtualEventSessionItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createVirtualEventSessionFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeVirtualEventSession,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const VirtualEventSessionItemRequestBuilderUriTemplate = "{+baseurl}/solutions/virtualEvents/webinars/{virtualEventWebinar%2Did}/sessions/{virtualEventSession%2Did}{?%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */