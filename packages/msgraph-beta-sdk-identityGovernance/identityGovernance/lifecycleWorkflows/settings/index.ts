/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createLifecycleManagementSettingsFromDiscriminatorValue, serializeLifecycleManagementSettings, type LifecycleManagementSettings } from '@microsoft/msgraph-beta-sdk/models/identityGovernance/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the settings property of the microsoft.graph.identityGovernance.lifecycleWorkflowsContainer entity.
 */
export interface SettingsRequestBuilder extends BaseRequestBuilder<SettingsRequestBuilder> {
    /**
     * Read the properties and relationships of a lifecycleManagementSettings object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of LifecycleManagementSettings
     * @see {@link https://learn.microsoft.com/graph/api/identitygovernance-lifecyclemanagementsettings-get?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<SettingsRequestBuilderGetQueryParameters> | undefined) : Promise<LifecycleManagementSettings | undefined>;
    /**
     * Update the properties of a lifecycleManagementSettings object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of LifecycleManagementSettings
     * @see {@link https://learn.microsoft.com/graph/api/identitygovernance-lifecyclemanagementsettings-update?view=graph-rest-1.0|Find more info here}
     */
     patch(body: LifecycleManagementSettings, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<LifecycleManagementSettings | undefined>;
    /**
     * Read the properties and relationships of a lifecycleManagementSettings object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<SettingsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the properties of a lifecycleManagementSettings object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPatchRequestInformation(body: LifecycleManagementSettings, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Read the properties and relationships of a lifecycleManagementSettings object.
 */
export interface SettingsRequestBuilderGetQueryParameters {
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
const SettingsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const SettingsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createLifecycleManagementSettingsFromDiscriminatorValue,
        queryParametersMapper: SettingsRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createLifecycleManagementSettingsFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeLifecycleManagementSettings,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const SettingsRequestBuilderUriTemplate = "{+baseurl}/identityGovernance/lifecycleWorkflows/settings{?%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */