/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createSiteProtectionRuleCollectionResponseFromDiscriminatorValue, type SiteProtectionRuleCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
// @ts-ignore
import { CountRequestBuilderRequestsMetadata, type CountRequestBuilder } from './count/';
// @ts-ignore
import { SiteProtectionRuleItemRequestBuilderRequestsMetadata, type SiteProtectionRuleItemRequestBuilder } from './item/';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the siteInclusionRules property of the microsoft.graph.sharePointProtectionPolicy entity.
 */
export interface SiteInclusionRulesRequestBuilder extends BaseRequestBuilder<SiteInclusionRulesRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the siteInclusionRules property of the microsoft.graph.sharePointProtectionPolicy entity.
     * @param siteProtectionRuleId The unique identifier of siteProtectionRule
     * @returns {SiteProtectionRuleItemRequestBuilder}
     */
     bySiteProtectionRuleId(siteProtectionRuleId: string) : SiteProtectionRuleItemRequestBuilder;
    /**
     * Get a list of siteProtectionRule objects associated with a sharePointProtectionPolicy. An inclusion rule indicates that a protection policy should contain protection units that match the specified rule criteria. The initial status of a protection rule upon creation is active. After the rule is applied, the state is either completed or completedWithErrors.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<SiteProtectionRuleCollectionResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/sharepointprotectionpolicy-list-siteinclusionrules?view=graph-rest-beta|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<SiteInclusionRulesRequestBuilderGetQueryParameters> | undefined) : Promise<SiteProtectionRuleCollectionResponse | undefined>;
    /**
     * Get a list of siteProtectionRule objects associated with a sharePointProtectionPolicy. An inclusion rule indicates that a protection policy should contain protection units that match the specified rule criteria. The initial status of a protection rule upon creation is active. After the rule is applied, the state is either completed or completedWithErrors.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<SiteInclusionRulesRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
}
/**
 * Get a list of siteProtectionRule objects associated with a sharePointProtectionPolicy. An inclusion rule indicates that a protection policy should contain protection units that match the specified rule criteria. The initial status of a protection rule upon creation is active. After the rule is applied, the state is either completed or completedWithErrors.
 */
export interface SiteInclusionRulesRequestBuilderGetQueryParameters {
    /**
     * Include count of items
     */
    count?: boolean;
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Filter items by property values
     */
    filter?: string;
    /**
     * Order items by property values
     */
    orderby?: string[];
    /**
     * Search items by search phrases
     */
    search?: string;
    /**
     * Select properties to be returned
     */
    select?: string[];
    /**
     * Skip the first n items
     */
    skip?: number;
    /**
     * Show only the first n items
     */
    top?: number;
}
/**
 * Uri template for the request builder.
 */
export const SiteInclusionRulesRequestBuilderUriTemplate = "{+baseurl}/solutions/backupRestore/sharePointProtectionPolicies/{sharePointProtectionPolicy%2Did}/siteInclusionRules{?%24count,%24expand,%24filter,%24orderby,%24search,%24select,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const SiteInclusionRulesRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "count": "%24count",
    "expand": "%24expand",
    "filter": "%24filter",
    "orderby": "%24orderby",
    "search": "%24search",
    "select": "%24select",
    "skip": "%24skip",
    "top": "%24top",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const SiteInclusionRulesRequestBuilderNavigationMetadata: Record<Exclude<keyof SiteInclusionRulesRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    bySiteProtectionRuleId: {
        requestsMetadata: SiteProtectionRuleItemRequestBuilderRequestsMetadata,
        pathParametersMappings: ["siteProtectionRule%2Did"],
    },
    count: {
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const SiteInclusionRulesRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: SiteInclusionRulesRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createSiteProtectionRuleCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: SiteInclusionRulesRequestBuilderGetQueryParametersMapper,
    },
};
/* tslint:enable */
/* eslint-enable */