/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
// @ts-ignore
import { createPartnerSecurityFromDiscriminatorValue, serializePartnerSecurity, type PartnerSecurity } from '@microsoft/msgraph-beta-sdk/models/partner/security/';
// @ts-ignore
import { SecurityAlertsRequestBuilderNavigationMetadata, SecurityAlertsRequestBuilderRequestsMetadata, type SecurityAlertsRequestBuilder } from './securityAlerts/';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the partner property of the microsoft.graph.security entity.
 */
export interface PartnerRequestBuilder extends BaseRequestBuilder<PartnerRequestBuilder> {
    /**
     * Provides operations to manage the securityAlerts property of the microsoft.graph.partner.security.partnerSecurity entity.
     */
    get securityAlerts(): SecurityAlertsRequestBuilder;
    /**
     * Delete navigation property partner for security
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * A container that safeguards the Microsoft Azure resources of Microsoft Cloud Solution Provider (CSP) partners’ customers, including alerts, scores, and all aspects of security.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<PartnerSecurity>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<PartnerRequestBuilderGetQueryParameters> | undefined) : Promise<PartnerSecurity | undefined>;
    /**
     * Update the navigation property partner in security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<PartnerSecurity>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     patch(body: PartnerSecurity, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<PartnerSecurity | undefined>;
    /**
     * Delete navigation property partner for security
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * A container that safeguards the Microsoft Azure resources of Microsoft Cloud Solution Provider (CSP) partners’ customers, including alerts, scores, and all aspects of security.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<PartnerRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property partner in security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: PartnerSecurity, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * A container that safeguards the Microsoft Azure resources of Microsoft Cloud Solution Provider (CSP) partners’ customers, including alerts, scores, and all aspects of security.
 */
export interface PartnerRequestBuilderGetQueryParameters {
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
export const PartnerRequestBuilderUriTemplate = "{+baseurl}/security/partner{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const PartnerRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const PartnerRequestBuilderNavigationMetadata: Record<Exclude<keyof PartnerRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    securityAlerts: {
        requestsMetadata: SecurityAlertsRequestBuilderRequestsMetadata,
        navigationMetadata: SecurityAlertsRequestBuilderNavigationMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const PartnerRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: PartnerRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: PartnerRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createPartnerSecurityFromDiscriminatorValue,
        queryParametersMapper: PartnerRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: PartnerRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createPartnerSecurityFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializePartnerSecurity,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */