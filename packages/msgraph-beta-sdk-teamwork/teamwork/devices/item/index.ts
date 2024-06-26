/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createTeamworkDeviceFromDiscriminatorValue, serializeTeamworkDevice, type TeamworkDevice } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { ActivityRequestBuilderRequestsMetadata, type ActivityRequestBuilder } from './activity/index.js';
// @ts-ignore
import { ConfigurationRequestBuilderRequestsMetadata, type ConfigurationRequestBuilder } from './configuration/index.js';
// @ts-ignore
import { HealthRequestBuilderRequestsMetadata, type HealthRequestBuilder } from './health/index.js';
// @ts-ignore
import { OperationsRequestBuilderNavigationMetadata, OperationsRequestBuilderRequestsMetadata, type OperationsRequestBuilder } from './operations/index.js';
// @ts-ignore
import { RestartRequestBuilderRequestsMetadata, type RestartRequestBuilder } from './restart/index.js';
// @ts-ignore
import { RunDiagnosticsRequestBuilderRequestsMetadata, type RunDiagnosticsRequestBuilder } from './runDiagnostics/index.js';
// @ts-ignore
import { type UpdateSoftwareRequestBuilder, UpdateSoftwareRequestBuilderRequestsMetadata } from './updateSoftware/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the devices property of the microsoft.graph.teamwork entity.
 */
export interface TeamworkDeviceItemRequestBuilder extends BaseRequestBuilder<TeamworkDeviceItemRequestBuilder> {
    /**
     * Provides operations to manage the activity property of the microsoft.graph.teamworkDevice entity.
     */
    get activity(): ActivityRequestBuilder;
    /**
     * Provides operations to manage the configuration property of the microsoft.graph.teamworkDevice entity.
     */
    get configuration(): ConfigurationRequestBuilder;
    /**
     * Provides operations to manage the health property of the microsoft.graph.teamworkDevice entity.
     */
    get health(): HealthRequestBuilder;
    /**
     * Provides operations to manage the operations property of the microsoft.graph.teamworkDevice entity.
     */
    get operations(): OperationsRequestBuilder;
    /**
     * Provides operations to call the restart method.
     */
    get restart(): RestartRequestBuilder;
    /**
     * Provides operations to call the runDiagnostics method.
     */
    get runDiagnostics(): RunDiagnosticsRequestBuilder;
    /**
     * Provides operations to call the updateSoftware method.
     */
    get updateSoftware(): UpdateSoftwareRequestBuilder;
    /**
     * Delete navigation property devices for teamwork
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Get the properties of a Microsoft Teams-enabled device. For example, you can use this method to get the device type, hardware detail, activity state, and health status information for a device that's enabled for Teams.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<TeamworkDevice>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/teamworkdevice-get?view=graph-rest-beta|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<TeamworkDeviceItemRequestBuilderGetQueryParameters> | undefined) : Promise<TeamworkDevice | undefined>;
    /**
     * Update the navigation property devices in teamwork
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<TeamworkDevice>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     patch(body: TeamworkDevice, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<TeamworkDevice | undefined>;
    /**
     * Delete navigation property devices for teamwork
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Get the properties of a Microsoft Teams-enabled device. For example, you can use this method to get the device type, hardware detail, activity state, and health status information for a device that's enabled for Teams.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<TeamworkDeviceItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property devices in teamwork
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: TeamworkDevice, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get the properties of a Microsoft Teams-enabled device. For example, you can use this method to get the device type, hardware detail, activity state, and health status information for a device that's enabled for Teams.
 */
export interface TeamworkDeviceItemRequestBuilderGetQueryParameters {
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
export const TeamworkDeviceItemRequestBuilderUriTemplate = "{+baseurl}/teamwork/devices/{teamworkDevice%2Did}{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const TeamworkDeviceItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const TeamworkDeviceItemRequestBuilderNavigationMetadata: Record<Exclude<keyof TeamworkDeviceItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    activity: {
        requestsMetadata: ActivityRequestBuilderRequestsMetadata,
    },
    configuration: {
        requestsMetadata: ConfigurationRequestBuilderRequestsMetadata,
    },
    health: {
        requestsMetadata: HealthRequestBuilderRequestsMetadata,
    },
    operations: {
        requestsMetadata: OperationsRequestBuilderRequestsMetadata,
        navigationMetadata: OperationsRequestBuilderNavigationMetadata,
    },
    restart: {
        requestsMetadata: RestartRequestBuilderRequestsMetadata,
    },
    runDiagnostics: {
        requestsMetadata: RunDiagnosticsRequestBuilderRequestsMetadata,
    },
    updateSoftware: {
        requestsMetadata: UpdateSoftwareRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const TeamworkDeviceItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: TeamworkDeviceItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: TeamworkDeviceItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createTeamworkDeviceFromDiscriminatorValue,
        queryParametersMapper: TeamworkDeviceItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: TeamworkDeviceItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createTeamworkDeviceFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeTeamworkDevice,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
