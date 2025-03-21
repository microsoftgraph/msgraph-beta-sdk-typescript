/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createCaseSettingsFromDiscriminatorValue, serializeCaseSettings, type CaseSettings } from '@microsoft/msgraph-beta-sdk/models/ediscovery/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { MicrosoftGraphEdiscoveryResetToDefaultRequestBuilderRequestsMetadata, type MicrosoftGraphEdiscoveryResetToDefaultRequestBuilder } from './microsoftGraphEdiscoveryResetToDefault/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the settings property of the microsoft.graph.ediscovery.case entity.
 */
export interface SettingsRequestBuilder extends BaseRequestBuilder<SettingsRequestBuilder> {
    /**
     * Provides operations to call the resetToDefault method.
     * @deprecated The ediscovery Apis are deprecated under /compliance and will stop returning data from February 01, 2023. Please use the new ediscovery Apis under /security. as of 2022-12/ediscoveryNamespace on 2022-12-05 and will be removed 2023-02-01
     */
    get microsoftGraphEdiscoveryResetToDefault(): MicrosoftGraphEdiscoveryResetToDefaultRequestBuilder;
    /**
     * Delete navigation property settings for compliance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @deprecated The ediscovery Apis are deprecated under /compliance and will stop returning data from February 01, 2023. Please use the new ediscovery Apis under /security. as of 2022-12/ediscoveryNamespace on 2022-12-05 and will be removed 2023-02-01
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Read the properties and relationships of an eDiscovery caseSettings object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<CaseSettings>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @deprecated The ediscovery Apis are deprecated under /compliance and will stop returning data from February 01, 2023. Please use the new ediscovery Apis under /security. as of 2022-12/ediscoveryNamespace on 2022-12-05 and will be removed 2023-02-01
     * @see {@link https://learn.microsoft.com/graph/api/ediscovery-casesettings-get?view=graph-rest-beta|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<SettingsRequestBuilderGetQueryParameters> | undefined) : Promise<CaseSettings | undefined>;
    /**
     * Update the properties of a an eDiscovery caseSettings object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<CaseSettings>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @deprecated The ediscovery Apis are deprecated under /compliance and will stop returning data from February 01, 2023. Please use the new ediscovery Apis under /security. as of 2022-12/ediscoveryNamespace on 2022-12-05 and will be removed 2023-02-01
     * @see {@link https://learn.microsoft.com/graph/api/ediscovery-casesettings-update?view=graph-rest-beta|Find more info here}
     */
     patch(body: CaseSettings, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<CaseSettings | undefined>;
    /**
     * Delete navigation property settings for compliance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     * @deprecated The ediscovery Apis are deprecated under /compliance and will stop returning data from February 01, 2023. Please use the new ediscovery Apis under /security. as of 2022-12/ediscoveryNamespace on 2022-12-05 and will be removed 2023-02-01
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Read the properties and relationships of an eDiscovery caseSettings object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     * @deprecated The ediscovery Apis are deprecated under /compliance and will stop returning data from February 01, 2023. Please use the new ediscovery Apis under /security. as of 2022-12/ediscoveryNamespace on 2022-12-05 and will be removed 2023-02-01
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<SettingsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the properties of a an eDiscovery caseSettings object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     * @deprecated The ediscovery Apis are deprecated under /compliance and will stop returning data from February 01, 2023. Please use the new ediscovery Apis under /security. as of 2022-12/ediscoveryNamespace on 2022-12-05 and will be removed 2023-02-01
     */
     toPatchRequestInformation(body: CaseSettings, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Read the properties and relationships of an eDiscovery caseSettings object.
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
 * Uri template for the request builder.
 */
export const SettingsRequestBuilderUriTemplate = "{+baseurl}/compliance/ediscovery/cases/{case%2Did}/settings{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const SettingsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const SettingsRequestBuilderNavigationMetadata: Record<Exclude<keyof SettingsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    microsoftGraphEdiscoveryResetToDefault: {
        requestsMetadata: MicrosoftGraphEdiscoveryResetToDefaultRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const SettingsRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: SettingsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: SettingsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createCaseSettingsFromDiscriminatorValue,
        queryParametersMapper: SettingsRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: SettingsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createCaseSettingsFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeCaseSettings,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
