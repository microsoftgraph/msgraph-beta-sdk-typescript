/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createWindowsInformationProtectionDeviceRegistrationFromDiscriminatorValue, serializeWindowsInformationProtectionDeviceRegistration, type WindowsInformationProtectionDeviceRegistration } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { type WipeRequestBuilder, WipeRequestBuilderRequestsMetadata, WipeRequestBuilderUriTemplate } from './wipe/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the windowsInformationProtectionDeviceRegistrations property of the microsoft.graph.deviceAppManagement entity.
 */
export interface WindowsInformationProtectionDeviceRegistrationItemRequestBuilder extends BaseRequestBuilder<WindowsInformationProtectionDeviceRegistrationItemRequestBuilder> {
    /**
     * Provides operations to call the wipe method.
     */
    get wipe(): WipeRequestBuilder;
    /**
     * Delete navigation property windowsInformationProtectionDeviceRegistrations for deviceAppManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Windows information protection device registrations that are not MDM enrolled.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of WindowsInformationProtectionDeviceRegistration
     */
     get(requestConfiguration?: RequestConfiguration<WindowsInformationProtectionDeviceRegistrationItemRequestBuilderGetQueryParameters> | undefined) : Promise<WindowsInformationProtectionDeviceRegistration | undefined>;
    /**
     * Update the navigation property windowsInformationProtectionDeviceRegistrations in deviceAppManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of WindowsInformationProtectionDeviceRegistration
     */
     patch(body: WindowsInformationProtectionDeviceRegistration, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<WindowsInformationProtectionDeviceRegistration | undefined>;
    /**
     * Delete navigation property windowsInformationProtectionDeviceRegistrations for deviceAppManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Windows information protection device registrations that are not MDM enrolled.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<WindowsInformationProtectionDeviceRegistrationItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property windowsInformationProtectionDeviceRegistrations in deviceAppManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPatchRequestInformation(body: WindowsInformationProtectionDeviceRegistration, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Windows information protection device registrations that are not MDM enrolled.
 */
export interface WindowsInformationProtectionDeviceRegistrationItemRequestBuilderGetQueryParameters {
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
const WindowsInformationProtectionDeviceRegistrationItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const WindowsInformationProtectionDeviceRegistrationItemRequestBuilderNavigationMetadata: Record<Exclude<keyof WindowsInformationProtectionDeviceRegistrationItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    wipe: {
        uriTemplate: WipeRequestBuilderUriTemplate,
        requestsMetadata: WipeRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const WindowsInformationProtectionDeviceRegistrationItemRequestBuilderRequestsMetadata: RequestsMetadata = {
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
        responseBodyFactory:  createWindowsInformationProtectionDeviceRegistrationFromDiscriminatorValue,
        queryParametersMapper: WindowsInformationProtectionDeviceRegistrationItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createWindowsInformationProtectionDeviceRegistrationFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeWindowsInformationProtectionDeviceRegistration,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const WindowsInformationProtectionDeviceRegistrationItemRequestBuilderUriTemplate = "{+baseurl}/deviceAppManagement/windowsInformationProtectionDeviceRegistrations/{windowsInformationProtectionDeviceRegistration%2Did}{?%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */