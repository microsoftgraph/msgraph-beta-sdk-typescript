/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createDirectoryFromDiscriminatorValue, serializeDirectory, type Directory } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { AdministrativeUnitsRequestBuilderNavigationMetadata, AdministrativeUnitsRequestBuilderRequestsMetadata, type AdministrativeUnitsRequestBuilder } from './administrativeUnits/index.js';
// @ts-ignore
import { AttributeSetsRequestBuilderNavigationMetadata, AttributeSetsRequestBuilderRequestsMetadata, type AttributeSetsRequestBuilder } from './attributeSets/index.js';
// @ts-ignore
import { AuthenticationMethodDevicesRequestBuilderNavigationMetadata, AuthenticationMethodDevicesRequestBuilderRequestsMetadata, type AuthenticationMethodDevicesRequestBuilder } from './authenticationMethodDevices/index.js';
// @ts-ignore
import { CertificateAuthoritiesRequestBuilderNavigationMetadata, CertificateAuthoritiesRequestBuilderRequestsMetadata, type CertificateAuthoritiesRequestBuilder } from './certificateAuthorities/index.js';
// @ts-ignore
import { CustomSecurityAttributeDefinitionsRequestBuilderNavigationMetadata, CustomSecurityAttributeDefinitionsRequestBuilderRequestsMetadata, type CustomSecurityAttributeDefinitionsRequestBuilder } from './customSecurityAttributeDefinitions/index.js';
// @ts-ignore
import { DeletedItemsRequestBuilderNavigationMetadata, DeletedItemsRequestBuilderRequestsMetadata, type DeletedItemsRequestBuilder } from './deletedItems/index.js';
// @ts-ignore
import { DeviceLocalCredentialsRequestBuilderNavigationMetadata, DeviceLocalCredentialsRequestBuilderRequestsMetadata, type DeviceLocalCredentialsRequestBuilder } from './deviceLocalCredentials/index.js';
// @ts-ignore
import { ExternalUserProfilesRequestBuilderNavigationMetadata, ExternalUserProfilesRequestBuilderRequestsMetadata, type ExternalUserProfilesRequestBuilder } from './externalUserProfiles/index.js';
// @ts-ignore
import { FeatureRolloutPoliciesRequestBuilderNavigationMetadata, FeatureRolloutPoliciesRequestBuilderRequestsMetadata, type FeatureRolloutPoliciesRequestBuilder } from './featureRolloutPolicies/index.js';
// @ts-ignore
import { FederationConfigurationsRequestBuilderNavigationMetadata, FederationConfigurationsRequestBuilderRequestsMetadata, type FederationConfigurationsRequestBuilder } from './federationConfigurations/index.js';
// @ts-ignore
import { ImpactedResourcesRequestBuilderNavigationMetadata, ImpactedResourcesRequestBuilderRequestsMetadata, type ImpactedResourcesRequestBuilder } from './impactedResources/index.js';
// @ts-ignore
import { InboundSharedUserProfilesRequestBuilderNavigationMetadata, InboundSharedUserProfilesRequestBuilderRequestsMetadata, type InboundSharedUserProfilesRequestBuilder } from './inboundSharedUserProfiles/index.js';
// @ts-ignore
import { OnPremisesSynchronizationRequestBuilderNavigationMetadata, OnPremisesSynchronizationRequestBuilderRequestsMetadata, type OnPremisesSynchronizationRequestBuilder } from './onPremisesSynchronization/index.js';
// @ts-ignore
import { OutboundSharedUserProfilesRequestBuilderNavigationMetadata, OutboundSharedUserProfilesRequestBuilderRequestsMetadata, type OutboundSharedUserProfilesRequestBuilder } from './outboundSharedUserProfiles/index.js';
// @ts-ignore
import { PendingExternalUserProfilesRequestBuilderNavigationMetadata, PendingExternalUserProfilesRequestBuilderRequestsMetadata, type PendingExternalUserProfilesRequestBuilder } from './pendingExternalUserProfiles/index.js';
// @ts-ignore
import { PublicKeyInfrastructureRequestBuilderNavigationMetadata, PublicKeyInfrastructureRequestBuilderRequestsMetadata, type PublicKeyInfrastructureRequestBuilder } from './publicKeyInfrastructure/index.js';
// @ts-ignore
import { RecommendationConfigurationRequestBuilderRequestsMetadata, type RecommendationConfigurationRequestBuilder } from './recommendationConfiguration/index.js';
// @ts-ignore
import { RecommendationsRequestBuilderNavigationMetadata, RecommendationsRequestBuilderRequestsMetadata, type RecommendationsRequestBuilder } from './recommendations/index.js';
// @ts-ignore
import { SharedEmailDomainsRequestBuilderNavigationMetadata, SharedEmailDomainsRequestBuilderRequestsMetadata, type SharedEmailDomainsRequestBuilder } from './sharedEmailDomains/index.js';
// @ts-ignore
import { SubscriptionsRequestBuilderNavigationMetadata, SubscriptionsRequestBuilderRequestsMetadata, type SubscriptionsRequestBuilder } from './subscriptions/index.js';
// @ts-ignore
import { SubscriptionsWithCommerceSubscriptionIdRequestBuilderRequestsMetadata, type SubscriptionsWithCommerceSubscriptionIdRequestBuilder } from './subscriptionsWithCommerceSubscriptionId/index.js';
// @ts-ignore
import { SubscriptionsWithOcpSubscriptionIdRequestBuilderRequestsMetadata, type SubscriptionsWithOcpSubscriptionIdRequestBuilder } from './subscriptionsWithOcpSubscriptionId/index.js';
// @ts-ignore
import { TemplatesRequestBuilderNavigationMetadata, TemplatesRequestBuilderRequestsMetadata, type TemplatesRequestBuilder } from './templates/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the directory singleton.
 */
export interface DirectoryRequestBuilder extends BaseRequestBuilder<DirectoryRequestBuilder> {
    /**
     * Provides operations to manage the administrativeUnits property of the microsoft.graph.directory entity.
     */
    get administrativeUnits(): AdministrativeUnitsRequestBuilder;
    /**
     * Provides operations to manage the attributeSets property of the microsoft.graph.directory entity.
     */
    get attributeSets(): AttributeSetsRequestBuilder;
    /**
     * Provides operations to manage the authenticationMethodDevices property of the microsoft.graph.directory entity.
     */
    get authenticationMethodDevices(): AuthenticationMethodDevicesRequestBuilder;
    /**
     * Provides operations to manage the certificateAuthorities property of the microsoft.graph.directory entity.
     */
    get certificateAuthorities(): CertificateAuthoritiesRequestBuilder;
    /**
     * Provides operations to manage the customSecurityAttributeDefinitions property of the microsoft.graph.directory entity.
     */
    get customSecurityAttributeDefinitions(): CustomSecurityAttributeDefinitionsRequestBuilder;
    /**
     * Provides operations to manage the deletedItems property of the microsoft.graph.directory entity.
     */
    get deletedItems(): DeletedItemsRequestBuilder;
    /**
     * Provides operations to manage the deviceLocalCredentials property of the microsoft.graph.directory entity.
     */
    get deviceLocalCredentials(): DeviceLocalCredentialsRequestBuilder;
    /**
     * Provides operations to manage the externalUserProfiles property of the microsoft.graph.directory entity.
     */
    get externalUserProfiles(): ExternalUserProfilesRequestBuilder;
    /**
     * Provides operations to manage the featureRolloutPolicies property of the microsoft.graph.directory entity.
     */
    get featureRolloutPolicies(): FeatureRolloutPoliciesRequestBuilder;
    /**
     * Provides operations to manage the federationConfigurations property of the microsoft.graph.directory entity.
     */
    get federationConfigurations(): FederationConfigurationsRequestBuilder;
    /**
     * Provides operations to manage the impactedResources property of the microsoft.graph.directory entity.
     */
    get impactedResources(): ImpactedResourcesRequestBuilder;
    /**
     * Provides operations to manage the inboundSharedUserProfiles property of the microsoft.graph.directory entity.
     */
    get inboundSharedUserProfiles(): InboundSharedUserProfilesRequestBuilder;
    /**
     * Provides operations to manage the onPremisesSynchronization property of the microsoft.graph.directory entity.
     */
    get onPremisesSynchronization(): OnPremisesSynchronizationRequestBuilder;
    /**
     * Provides operations to manage the outboundSharedUserProfiles property of the microsoft.graph.directory entity.
     */
    get outboundSharedUserProfiles(): OutboundSharedUserProfilesRequestBuilder;
    /**
     * Provides operations to manage the pendingExternalUserProfiles property of the microsoft.graph.directory entity.
     */
    get pendingExternalUserProfiles(): PendingExternalUserProfilesRequestBuilder;
    /**
     * Provides operations to manage the publicKeyInfrastructure property of the microsoft.graph.directory entity.
     */
    get publicKeyInfrastructure(): PublicKeyInfrastructureRequestBuilder;
    /**
     * Provides operations to manage the recommendationConfiguration property of the microsoft.graph.directory entity.
     */
    get recommendationConfiguration(): RecommendationConfigurationRequestBuilder;
    /**
     * Provides operations to manage the recommendations property of the microsoft.graph.directory entity.
     */
    get recommendations(): RecommendationsRequestBuilder;
    /**
     * Provides operations to manage the sharedEmailDomains property of the microsoft.graph.directory entity.
     */
    get sharedEmailDomains(): SharedEmailDomainsRequestBuilder;
    /**
     * Provides operations to manage the subscriptions property of the microsoft.graph.directory entity.
     */
    get subscriptions(): SubscriptionsRequestBuilder;
    /**
     * Provides operations to manage the templates property of the microsoft.graph.directory entity.
     */
    get templates(): TemplatesRequestBuilder;
    /**
     * Get directory
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<Directory>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<DirectoryRequestBuilderGetQueryParameters> | undefined) : Promise<Directory | undefined>;
    /**
     * Update directory
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<Directory>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     patch(body: Directory, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<Directory | undefined>;
    /**
     * Provides operations to manage the subscriptions property of the microsoft.graph.directory entity.
     * @param commerceSubscriptionId Alternate key of companySubscription
     * @returns {SubscriptionsWithCommerceSubscriptionIdRequestBuilder}
     */
     subscriptionsWithCommerceSubscriptionId(commerceSubscriptionId: string | undefined) : SubscriptionsWithCommerceSubscriptionIdRequestBuilder;
    /**
     * Provides operations to manage the subscriptions property of the microsoft.graph.directory entity.
     * @param ocpSubscriptionId Alternate key of companySubscription
     * @returns {SubscriptionsWithOcpSubscriptionIdRequestBuilder}
     */
     subscriptionsWithOcpSubscriptionId(ocpSubscriptionId: string | undefined) : SubscriptionsWithOcpSubscriptionIdRequestBuilder;
    /**
     * Get directory
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<DirectoryRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update directory
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: Directory, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get directory
 */
export interface DirectoryRequestBuilderGetQueryParameters {
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
export const DirectoryRequestBuilderUriTemplate = "{+baseurl}/directory{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const DirectoryRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const DirectoryRequestBuilderNavigationMetadata: Record<Exclude<keyof DirectoryRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    subscriptionsWithCommerceSubscriptionId: {
        requestsMetadata: SubscriptionsWithCommerceSubscriptionIdRequestBuilderRequestsMetadata,
        pathParametersMappings: ["commerceSubscriptionId"],
    },
    subscriptionsWithOcpSubscriptionId: {
        requestsMetadata: SubscriptionsWithOcpSubscriptionIdRequestBuilderRequestsMetadata,
        pathParametersMappings: ["ocpSubscriptionId"],
    },
    administrativeUnits: {
        requestsMetadata: AdministrativeUnitsRequestBuilderRequestsMetadata,
        navigationMetadata: AdministrativeUnitsRequestBuilderNavigationMetadata,
    },
    attributeSets: {
        requestsMetadata: AttributeSetsRequestBuilderRequestsMetadata,
        navigationMetadata: AttributeSetsRequestBuilderNavigationMetadata,
    },
    authenticationMethodDevices: {
        requestsMetadata: AuthenticationMethodDevicesRequestBuilderRequestsMetadata,
        navigationMetadata: AuthenticationMethodDevicesRequestBuilderNavigationMetadata,
    },
    certificateAuthorities: {
        requestsMetadata: CertificateAuthoritiesRequestBuilderRequestsMetadata,
        navigationMetadata: CertificateAuthoritiesRequestBuilderNavigationMetadata,
    },
    customSecurityAttributeDefinitions: {
        requestsMetadata: CustomSecurityAttributeDefinitionsRequestBuilderRequestsMetadata,
        navigationMetadata: CustomSecurityAttributeDefinitionsRequestBuilderNavigationMetadata,
    },
    deletedItems: {
        requestsMetadata: DeletedItemsRequestBuilderRequestsMetadata,
        navigationMetadata: DeletedItemsRequestBuilderNavigationMetadata,
    },
    deviceLocalCredentials: {
        requestsMetadata: DeviceLocalCredentialsRequestBuilderRequestsMetadata,
        navigationMetadata: DeviceLocalCredentialsRequestBuilderNavigationMetadata,
    },
    externalUserProfiles: {
        requestsMetadata: ExternalUserProfilesRequestBuilderRequestsMetadata,
        navigationMetadata: ExternalUserProfilesRequestBuilderNavigationMetadata,
    },
    featureRolloutPolicies: {
        requestsMetadata: FeatureRolloutPoliciesRequestBuilderRequestsMetadata,
        navigationMetadata: FeatureRolloutPoliciesRequestBuilderNavigationMetadata,
    },
    federationConfigurations: {
        requestsMetadata: FederationConfigurationsRequestBuilderRequestsMetadata,
        navigationMetadata: FederationConfigurationsRequestBuilderNavigationMetadata,
    },
    impactedResources: {
        requestsMetadata: ImpactedResourcesRequestBuilderRequestsMetadata,
        navigationMetadata: ImpactedResourcesRequestBuilderNavigationMetadata,
    },
    inboundSharedUserProfiles: {
        requestsMetadata: InboundSharedUserProfilesRequestBuilderRequestsMetadata,
        navigationMetadata: InboundSharedUserProfilesRequestBuilderNavigationMetadata,
    },
    onPremisesSynchronization: {
        requestsMetadata: OnPremisesSynchronizationRequestBuilderRequestsMetadata,
        navigationMetadata: OnPremisesSynchronizationRequestBuilderNavigationMetadata,
    },
    outboundSharedUserProfiles: {
        requestsMetadata: OutboundSharedUserProfilesRequestBuilderRequestsMetadata,
        navigationMetadata: OutboundSharedUserProfilesRequestBuilderNavigationMetadata,
    },
    pendingExternalUserProfiles: {
        requestsMetadata: PendingExternalUserProfilesRequestBuilderRequestsMetadata,
        navigationMetadata: PendingExternalUserProfilesRequestBuilderNavigationMetadata,
    },
    publicKeyInfrastructure: {
        requestsMetadata: PublicKeyInfrastructureRequestBuilderRequestsMetadata,
        navigationMetadata: PublicKeyInfrastructureRequestBuilderNavigationMetadata,
    },
    recommendationConfiguration: {
        requestsMetadata: RecommendationConfigurationRequestBuilderRequestsMetadata,
    },
    recommendations: {
        requestsMetadata: RecommendationsRequestBuilderRequestsMetadata,
        navigationMetadata: RecommendationsRequestBuilderNavigationMetadata,
    },
    sharedEmailDomains: {
        requestsMetadata: SharedEmailDomainsRequestBuilderRequestsMetadata,
        navigationMetadata: SharedEmailDomainsRequestBuilderNavigationMetadata,
    },
    subscriptions: {
        requestsMetadata: SubscriptionsRequestBuilderRequestsMetadata,
        navigationMetadata: SubscriptionsRequestBuilderNavigationMetadata,
    },
    templates: {
        requestsMetadata: TemplatesRequestBuilderRequestsMetadata,
        navigationMetadata: TemplatesRequestBuilderNavigationMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const DirectoryRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: DirectoryRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createDirectoryFromDiscriminatorValue,
        queryParametersMapper: DirectoryRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: DirectoryRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createDirectoryFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeDirectory,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
