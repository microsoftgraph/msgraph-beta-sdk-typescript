/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createAndroidForWorkSettingsFromDiscriminatorValue, serializeAndroidForWorkSettings, type AndroidForWorkSettings } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { CompleteSignupRequestBuilderRequestsMetadata, type CompleteSignupRequestBuilder } from './completeSignup/index.js';
// @ts-ignore
import { RequestSignupUrlRequestBuilderRequestsMetadata, type RequestSignupUrlRequestBuilder } from './requestSignupUrl/index.js';
// @ts-ignore
import { SyncAppsRequestBuilderRequestsMetadata, type SyncAppsRequestBuilder } from './syncApps/index.js';
// @ts-ignore
import { type UnbindRequestBuilder, UnbindRequestBuilderRequestsMetadata } from './unbind/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the androidForWorkSettings property of the microsoft.graph.deviceManagement entity.
 */
export interface AndroidForWorkSettingsRequestBuilder extends BaseRequestBuilder<AndroidForWorkSettingsRequestBuilder> {
    /**
     * Provides operations to call the completeSignup method.
     */
    get completeSignup(): CompleteSignupRequestBuilder;
    /**
     * Provides operations to call the requestSignupUrl method.
     */
    get requestSignupUrl(): RequestSignupUrlRequestBuilder;
    /**
     * Provides operations to call the syncApps method.
     */
    get syncApps(): SyncAppsRequestBuilder;
    /**
     * Provides operations to call the unbind method.
     */
    get unbind(): UnbindRequestBuilder;
    /**
     * Delete navigation property androidForWorkSettings for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * The singleton Android for Work settings entity.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<AndroidForWorkSettings>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<AndroidForWorkSettingsRequestBuilderGetQueryParameters> | undefined) : Promise<AndroidForWorkSettings | undefined>;
    /**
     * Update the navigation property androidForWorkSettings in deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<AndroidForWorkSettings>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     patch(body: AndroidForWorkSettings, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<AndroidForWorkSettings | undefined>;
    /**
     * Delete navigation property androidForWorkSettings for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * The singleton Android for Work settings entity.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<AndroidForWorkSettingsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property androidForWorkSettings in deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: AndroidForWorkSettings, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * The singleton Android for Work settings entity.
 */
export interface AndroidForWorkSettingsRequestBuilderGetQueryParameters {
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
export const AndroidForWorkSettingsRequestBuilderUriTemplate = "{+baseurl}/deviceManagement/androidForWorkSettings{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const AndroidForWorkSettingsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const AndroidForWorkSettingsRequestBuilderNavigationMetadata: Record<Exclude<keyof AndroidForWorkSettingsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    completeSignup: {
        requestsMetadata: CompleteSignupRequestBuilderRequestsMetadata,
    },
    requestSignupUrl: {
        requestsMetadata: RequestSignupUrlRequestBuilderRequestsMetadata,
    },
    syncApps: {
        requestsMetadata: SyncAppsRequestBuilderRequestsMetadata,
    },
    unbind: {
        requestsMetadata: UnbindRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const AndroidForWorkSettingsRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: AndroidForWorkSettingsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: AndroidForWorkSettingsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createAndroidForWorkSettingsFromDiscriminatorValue,
        queryParametersMapper: AndroidForWorkSettingsRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: AndroidForWorkSettingsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createAndroidForWorkSettingsFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeAndroidForWorkSettings,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
