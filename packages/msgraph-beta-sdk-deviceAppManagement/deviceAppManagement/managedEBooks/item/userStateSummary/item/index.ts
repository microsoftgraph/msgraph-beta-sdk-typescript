/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createUserInstallStateSummaryFromDiscriminatorValue, serializeUserInstallStateSummary, type UserInstallStateSummary } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { DeviceStatesRequestBuilderNavigationMetadata, DeviceStatesRequestBuilderRequestsMetadata, DeviceStatesRequestBuilderUriTemplate, type DeviceStatesRequestBuilder } from './deviceStates/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the userStateSummary property of the microsoft.graph.managedEBook entity.
 */
export interface UserInstallStateSummaryItemRequestBuilder extends BaseRequestBuilder<UserInstallStateSummaryItemRequestBuilder> {
    /**
     * Provides operations to manage the deviceStates property of the microsoft.graph.userInstallStateSummary entity.
     */
    get deviceStates(): DeviceStatesRequestBuilder;
    /**
     * Delete navigation property userStateSummary for deviceAppManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * The list of installation states for this eBook.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UserInstallStateSummary
     */
     get(requestConfiguration?: RequestConfiguration<UserInstallStateSummaryItemRequestBuilderGetQueryParameters> | undefined) : Promise<UserInstallStateSummary | undefined>;
    /**
     * Update the navigation property userStateSummary in deviceAppManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UserInstallStateSummary
     */
     patch(body: UserInstallStateSummary, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<UserInstallStateSummary | undefined>;
    /**
     * Delete navigation property userStateSummary for deviceAppManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * The list of installation states for this eBook.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<UserInstallStateSummaryItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property userStateSummary in deviceAppManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPatchRequestInformation(body: UserInstallStateSummary, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * The list of installation states for this eBook.
 */
export interface UserInstallStateSummaryItemRequestBuilderGetQueryParameters {
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
const UserInstallStateSummaryItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const UserInstallStateSummaryItemRequestBuilderNavigationMetadata: Record<Exclude<keyof UserInstallStateSummaryItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    deviceStates: {
        uriTemplate: DeviceStatesRequestBuilderUriTemplate,
        requestsMetadata: DeviceStatesRequestBuilderRequestsMetadata,
        navigationMetadata: DeviceStatesRequestBuilderNavigationMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const UserInstallStateSummaryItemRequestBuilderRequestsMetadata: RequestsMetadata = {
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
        responseBodyFactory:  createUserInstallStateSummaryFromDiscriminatorValue,
        queryParametersMapper: UserInstallStateSummaryItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createUserInstallStateSummaryFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeUserInstallStateSummary,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const UserInstallStateSummaryItemRequestBuilderUriTemplate = "{+baseurl}/deviceAppManagement/managedEBooks/{managedEBook%2Did}/userStateSummary/{userInstallStateSummary%2Did}{?%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */