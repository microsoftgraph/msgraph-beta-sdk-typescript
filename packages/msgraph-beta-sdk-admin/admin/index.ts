/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createAdminFromDiscriminatorValue, serializeAdmin, type Admin } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { AppsAndServicesRequestBuilderRequestsMetadata, type AppsAndServicesRequestBuilder } from './appsAndServices/';
import { DynamicsRequestBuilderRequestsMetadata, type DynamicsRequestBuilder } from './dynamics/';
import { EdgeRequestBuilderNavigationMetadata, EdgeRequestBuilderRequestsMetadata, type EdgeRequestBuilder } from './edge/';
import { FormsRequestBuilderRequestsMetadata, type FormsRequestBuilder } from './forms/';
import { Microsoft365AppsRequestBuilderNavigationMetadata, Microsoft365AppsRequestBuilderRequestsMetadata, type Microsoft365AppsRequestBuilder } from './microsoft365Apps/';
import { PeopleRequestBuilderNavigationMetadata, PeopleRequestBuilderRequestsMetadata, type PeopleRequestBuilder } from './people/';
import { ReportSettingsRequestBuilderRequestsMetadata, type ReportSettingsRequestBuilder } from './reportSettings/';
import { ServiceAnnouncementRequestBuilderNavigationMetadata, ServiceAnnouncementRequestBuilderRequestsMetadata, type ServiceAnnouncementRequestBuilder } from './serviceAnnouncement/';
import { SharepointRequestBuilderNavigationMetadata, SharepointRequestBuilderRequestsMetadata, type SharepointRequestBuilder } from './sharepoint/';
import { TodoRequestBuilderRequestsMetadata, type TodoRequestBuilder } from './todo/';
import { type WindowsRequestBuilder, WindowsRequestBuilderNavigationMetadata, WindowsRequestBuilderRequestsMetadata } from './windows/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the admin singleton.
 */
export interface AdminRequestBuilder extends BaseRequestBuilder<AdminRequestBuilder> {
    /**
     * Provides operations to manage the appsAndServices property of the microsoft.graph.admin entity.
     */
    get appsAndServices(): AppsAndServicesRequestBuilder;
    /**
     * Provides operations to manage the dynamics property of the microsoft.graph.admin entity.
     */
    get dynamics(): DynamicsRequestBuilder;
    /**
     * Provides operations to manage the edge property of the microsoft.graph.admin entity.
     */
    get edge(): EdgeRequestBuilder;
    /**
     * Provides operations to manage the forms property of the microsoft.graph.admin entity.
     */
    get forms(): FormsRequestBuilder;
    /**
     * Provides operations to manage the microsoft365Apps property of the microsoft.graph.admin entity.
     */
    get microsoft365Apps(): Microsoft365AppsRequestBuilder;
    /**
     * Provides operations to manage the people property of the microsoft.graph.admin entity.
     */
    get people(): PeopleRequestBuilder;
    /**
     * Provides operations to manage the reportSettings property of the microsoft.graph.admin entity.
     */
    get reportSettings(): ReportSettingsRequestBuilder;
    /**
     * Provides operations to manage the serviceAnnouncement property of the microsoft.graph.admin entity.
     */
    get serviceAnnouncement(): ServiceAnnouncementRequestBuilder;
    /**
     * Provides operations to manage the sharepoint property of the microsoft.graph.admin entity.
     */
    get sharepoint(): SharepointRequestBuilder;
    /**
     * Provides operations to manage the todo property of the microsoft.graph.admin entity.
     */
    get todo(): TodoRequestBuilder;
    /**
     * Provides operations to manage the windows property of the microsoft.graph.admin entity.
     */
    get windows(): WindowsRequestBuilder;
    /**
     * Get admin
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<Admin>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<AdminRequestBuilderGetQueryParameters> | undefined) : Promise<Admin | undefined>;
    /**
     * Update admin
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<Admin>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     patch(body: Admin, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<Admin | undefined>;
    /**
     * Get admin
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<AdminRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update admin
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: Admin, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get admin
 */
export interface AdminRequestBuilderGetQueryParameters {
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
 * Uri template for the request builder.
 */
export const AdminRequestBuilderUriTemplate = "{+baseurl}/admin{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const AdminRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const AdminRequestBuilderNavigationMetadata: Record<Exclude<keyof AdminRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    appsAndServices: {
        requestsMetadata: AppsAndServicesRequestBuilderRequestsMetadata,
    },
    dynamics: {
        requestsMetadata: DynamicsRequestBuilderRequestsMetadata,
    },
    edge: {
        requestsMetadata: EdgeRequestBuilderRequestsMetadata,
        navigationMetadata: EdgeRequestBuilderNavigationMetadata,
    },
    forms: {
        requestsMetadata: FormsRequestBuilderRequestsMetadata,
    },
    microsoft365Apps: {
        requestsMetadata: Microsoft365AppsRequestBuilderRequestsMetadata,
        navigationMetadata: Microsoft365AppsRequestBuilderNavigationMetadata,
    },
    people: {
        requestsMetadata: PeopleRequestBuilderRequestsMetadata,
        navigationMetadata: PeopleRequestBuilderNavigationMetadata,
    },
    reportSettings: {
        requestsMetadata: ReportSettingsRequestBuilderRequestsMetadata,
    },
    serviceAnnouncement: {
        requestsMetadata: ServiceAnnouncementRequestBuilderRequestsMetadata,
        navigationMetadata: ServiceAnnouncementRequestBuilderNavigationMetadata,
    },
    sharepoint: {
        requestsMetadata: SharepointRequestBuilderRequestsMetadata,
        navigationMetadata: SharepointRequestBuilderNavigationMetadata,
    },
    todo: {
        requestsMetadata: TodoRequestBuilderRequestsMetadata,
    },
    windows: {
        requestsMetadata: WindowsRequestBuilderRequestsMetadata,
        navigationMetadata: WindowsRequestBuilderNavigationMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const AdminRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: AdminRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createAdminFromDiscriminatorValue,
        queryParametersMapper: AdminRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: AdminRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createAdminFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeAdmin,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
