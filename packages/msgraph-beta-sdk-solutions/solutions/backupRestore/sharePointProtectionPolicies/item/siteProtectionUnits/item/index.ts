/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createSiteProtectionUnitFromDiscriminatorValue, type SiteProtectionUnit } from '@microsoft/msgraph-beta-sdk/models/';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the siteProtectionUnits property of the microsoft.graph.sharePointProtectionPolicy entity.
 */
export interface SiteProtectionUnitItemRequestBuilder extends BaseRequestBuilder<SiteProtectionUnitItemRequestBuilder> {
    /**
     * The protection units (sites) that are protected under the site protection policy.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<SiteProtectionUnit>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<SiteProtectionUnitItemRequestBuilderGetQueryParameters> | undefined) : Promise<SiteProtectionUnit | undefined>;
    /**
     * The protection units (sites) that are protected under the site protection policy.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<SiteProtectionUnitItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
}
/**
 * The protection units (sites) that are protected under the site protection policy.
 */
export interface SiteProtectionUnitItemRequestBuilderGetQueryParameters {
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
export const SiteProtectionUnitItemRequestBuilderUriTemplate = "{+baseurl}/solutions/backupRestore/sharePointProtectionPolicies/{sharePointProtectionPolicy%2Did}/siteProtectionUnits/{siteProtectionUnit%2Did}{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const SiteProtectionUnitItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const SiteProtectionUnitItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: SiteProtectionUnitItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createSiteProtectionUnitFromDiscriminatorValue,
        queryParametersMapper: SiteProtectionUnitItemRequestBuilderGetQueryParametersMapper,
    },
};
/* tslint:enable */
/* eslint-enable */