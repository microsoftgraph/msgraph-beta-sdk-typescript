/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createWindowsInformationProtectionWipeActionFromDiscriminatorValue, serializeWindowsInformationProtectionWipeAction, type WindowsInformationProtectionWipeAction } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the windowsInformationProtectionWipeActions property of the microsoft.graph.deviceAppManagement entity.
 */
export interface WindowsInformationProtectionWipeActionItemRequestBuilder extends BaseRequestBuilder<WindowsInformationProtectionWipeActionItemRequestBuilder> {
    /**
     * Delete navigation property windowsInformationProtectionWipeActions for deviceAppManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Windows information protection wipe actions.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of WindowsInformationProtectionWipeAction
     */
     get(requestConfiguration?: RequestConfiguration<WindowsInformationProtectionWipeActionItemRequestBuilderGetQueryParameters> | undefined) : Promise<WindowsInformationProtectionWipeAction | undefined>;
    /**
     * Update the navigation property windowsInformationProtectionWipeActions in deviceAppManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of WindowsInformationProtectionWipeAction
     */
     patch(body: WindowsInformationProtectionWipeAction, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<WindowsInformationProtectionWipeAction | undefined>;
    /**
     * Delete navigation property windowsInformationProtectionWipeActions for deviceAppManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Windows information protection wipe actions.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<WindowsInformationProtectionWipeActionItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property windowsInformationProtectionWipeActions in deviceAppManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPatchRequestInformation(body: WindowsInformationProtectionWipeAction, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Windows information protection wipe actions.
 */
export interface WindowsInformationProtectionWipeActionItemRequestBuilderGetQueryParameters {
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
const WindowsInformationProtectionWipeActionItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const WindowsInformationProtectionWipeActionItemRequestBuilderRequestsMetadata: RequestsMetadata = {
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
        responseBodyFactory:  createWindowsInformationProtectionWipeActionFromDiscriminatorValue,
        queryParametersMapper: WindowsInformationProtectionWipeActionItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createWindowsInformationProtectionWipeActionFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeWindowsInformationProtectionWipeAction,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const WindowsInformationProtectionWipeActionItemRequestBuilderUriTemplate = "{+baseurl}/deviceAppManagement/windowsInformationProtectionWipeActions/{windowsInformationProtectionWipeAction%2Did}{?%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */