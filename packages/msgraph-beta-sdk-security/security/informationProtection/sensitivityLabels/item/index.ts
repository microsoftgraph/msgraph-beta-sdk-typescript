/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { createSensitivityLabelFromDiscriminatorValue, serializeSensitivityLabel, type SensitivityLabel } from '@microsoft/msgraph-beta-sdk/models/security/index.js';
// @ts-ignore
import { ParentRequestBuilderRequestsMetadata, type ParentRequestBuilder } from './parent/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the sensitivityLabels property of the microsoft.graph.security.informationProtection entity.
 */
export interface SensitivityLabelItemRequestBuilder extends BaseRequestBuilder<SensitivityLabelItemRequestBuilder> {
    /**
     * Provides operations to manage the parent property of the microsoft.graph.security.sensitivityLabel entity.
     */
    get parent(): ParentRequestBuilder;
    /**
     * Delete navigation property sensitivityLabels for security
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Read the Microsoft Purview Information Protection labels for the user or organization.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<SensitivityLabel>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<SensitivityLabelItemRequestBuilderGetQueryParameters> | undefined) : Promise<SensitivityLabel | undefined>;
    /**
     * Update the navigation property sensitivityLabels in security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<SensitivityLabel>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     patch(body: SensitivityLabel, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<SensitivityLabel | undefined>;
    /**
     * Delete navigation property sensitivityLabels for security
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Read the Microsoft Purview Information Protection labels for the user or organization.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<SensitivityLabelItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property sensitivityLabels in security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: SensitivityLabel, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Read the Microsoft Purview Information Protection labels for the user or organization.
 */
export interface SensitivityLabelItemRequestBuilderGetQueryParameters {
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
export const SensitivityLabelItemRequestBuilderUriTemplate = "{+baseurl}/security/informationProtection/sensitivityLabels/{sensitivityLabel%2Did}{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const SensitivityLabelItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const SensitivityLabelItemRequestBuilderNavigationMetadata: Record<Exclude<keyof SensitivityLabelItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    parent: {
        requestsMetadata: ParentRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const SensitivityLabelItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: SensitivityLabelItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: SensitivityLabelItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createSensitivityLabelFromDiscriminatorValue,
        queryParametersMapper: SensitivityLabelItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: SensitivityLabelItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createSensitivityLabelFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeSensitivityLabel,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
