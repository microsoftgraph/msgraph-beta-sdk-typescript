/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createDeviceTemplateFromDiscriminatorValue, serializeDeviceTemplate, type DeviceTemplate } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { CreateDeviceFromTemplateRequestBuilderRequestsMetadata, type CreateDeviceFromTemplateRequestBuilder } from './createDeviceFromTemplate/index.js';
// @ts-ignore
import { DeviceInstancesRequestBuilderNavigationMetadata, DeviceInstancesRequestBuilderRequestsMetadata, type DeviceInstancesRequestBuilder } from './deviceInstances/index.js';
// @ts-ignore
import { DeviceInstancesWithDeviceIdRequestBuilderRequestsMetadata, type DeviceInstancesWithDeviceIdRequestBuilder } from './deviceInstancesWithDeviceId/index.js';
// @ts-ignore
import { OwnersRequestBuilderNavigationMetadata, OwnersRequestBuilderRequestsMetadata, type OwnersRequestBuilder } from './owners/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the deviceTemplates property of the microsoft.graph.template entity.
 */
export interface DeviceTemplateItemRequestBuilder extends BaseRequestBuilder<DeviceTemplateItemRequestBuilder> {
    /**
     * Provides operations to call the createDeviceFromTemplate method.
     */
    get createDeviceFromTemplate(): CreateDeviceFromTemplateRequestBuilder;
    /**
     * Provides operations to manage the deviceInstances property of the microsoft.graph.deviceTemplate entity.
     */
    get deviceInstances(): DeviceInstancesRequestBuilder;
    /**
     * Provides operations to manage the owners property of the microsoft.graph.deviceTemplate entity.
     */
    get owners(): OwnersRequestBuilder;
    /**
     * Delete a registered deviceTemplate. You must first delete all devices linked to the template before deleting the template itself. Only registered owners of the template can perform this operation.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/devicetemplate-delete?view=graph-rest-beta|Find more info here}
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Provides operations to manage the deviceInstances property of the microsoft.graph.deviceTemplate entity.
     * @param deviceId Alternate key of device
     * @returns {DeviceInstancesWithDeviceIdRequestBuilder}
     */
     deviceInstancesWithDeviceId(deviceId: string | undefined) : DeviceInstancesWithDeviceIdRequestBuilder;
    /**
     * Get the properties and relationships of a deviceTemplate object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<DeviceTemplate>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/devicetemplate-get?view=graph-rest-beta|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<DeviceTemplateItemRequestBuilderGetQueryParameters> | undefined) : Promise<DeviceTemplate | undefined>;
    /**
     * Update the navigation property deviceTemplates in directory
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<DeviceTemplate>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     patch(body: DeviceTemplate, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<DeviceTemplate | undefined>;
    /**
     * Delete a registered deviceTemplate. You must first delete all devices linked to the template before deleting the template itself. Only registered owners of the template can perform this operation.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Get the properties and relationships of a deviceTemplate object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<DeviceTemplateItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property deviceTemplates in directory
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: DeviceTemplate, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get the properties and relationships of a deviceTemplate object.
 */
export interface DeviceTemplateItemRequestBuilderGetQueryParameters {
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
export const DeviceTemplateItemRequestBuilderUriTemplate = "{+baseurl}/directory/templates/deviceTemplates/{deviceTemplate%2Did}{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const DeviceTemplateItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const DeviceTemplateItemRequestBuilderNavigationMetadata: Record<Exclude<keyof DeviceTemplateItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    deviceInstancesWithDeviceId: {
        requestsMetadata: DeviceInstancesWithDeviceIdRequestBuilderRequestsMetadata,
        pathParametersMappings: ["deviceId"],
    },
    createDeviceFromTemplate: {
        requestsMetadata: CreateDeviceFromTemplateRequestBuilderRequestsMetadata,
    },
    deviceInstances: {
        requestsMetadata: DeviceInstancesRequestBuilderRequestsMetadata,
        navigationMetadata: DeviceInstancesRequestBuilderNavigationMetadata,
    },
    owners: {
        requestsMetadata: OwnersRequestBuilderRequestsMetadata,
        navigationMetadata: OwnersRequestBuilderNavigationMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const DeviceTemplateItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: DeviceTemplateItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: DeviceTemplateItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createDeviceTemplateFromDiscriminatorValue,
        queryParametersMapper: DeviceTemplateItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: DeviceTemplateItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createDeviceTemplateFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeDeviceTemplate,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
