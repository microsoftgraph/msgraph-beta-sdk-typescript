/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createIdentityContainerFromDiscriminatorValue, serializeIdentityContainer, type IdentityContainer } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { ApiConnectorsRequestBuilderNavigationMetadata, ApiConnectorsRequestBuilderRequestsMetadata, type ApiConnectorsRequestBuilder } from './apiConnectors/index.js';
// @ts-ignore
import { AuthenticationEventListenersRequestBuilderNavigationMetadata, AuthenticationEventListenersRequestBuilderRequestsMetadata, type AuthenticationEventListenersRequestBuilder } from './authenticationEventListeners/index.js';
// @ts-ignore
import { AuthenticationEventsFlowsRequestBuilderNavigationMetadata, AuthenticationEventsFlowsRequestBuilderRequestsMetadata, type AuthenticationEventsFlowsRequestBuilder } from './authenticationEventsFlows/index.js';
// @ts-ignore
import { B2cUserFlowsRequestBuilderNavigationMetadata, B2cUserFlowsRequestBuilderRequestsMetadata, type B2cUserFlowsRequestBuilder } from './b2cUserFlows/index.js';
// @ts-ignore
import { B2xUserFlowsRequestBuilderNavigationMetadata, B2xUserFlowsRequestBuilderRequestsMetadata, type B2xUserFlowsRequestBuilder } from './b2xUserFlows/index.js';
// @ts-ignore
import { ConditionalAccessRequestBuilderNavigationMetadata, type ConditionalAccessRequestBuilder } from './conditionalAccess/index.js';
// @ts-ignore
import { ContinuousAccessEvaluationPolicyRequestBuilderRequestsMetadata, type ContinuousAccessEvaluationPolicyRequestBuilder } from './continuousAccessEvaluationPolicy/index.js';
// @ts-ignore
import { CustomAuthenticationExtensionsRequestBuilderNavigationMetadata, CustomAuthenticationExtensionsRequestBuilderRequestsMetadata, type CustomAuthenticationExtensionsRequestBuilder } from './customAuthenticationExtensions/index.js';
// @ts-ignore
import { IdentityProvidersRequestBuilderNavigationMetadata, IdentityProvidersRequestBuilderRequestsMetadata, type IdentityProvidersRequestBuilder } from './identityProviders/index.js';
// @ts-ignore
import { ProductChangesRequestBuilderNavigationMetadata, ProductChangesRequestBuilderRequestsMetadata, type ProductChangesRequestBuilder } from './productChanges/index.js';
// @ts-ignore
import { type UserFlowAttributesRequestBuilder, UserFlowAttributesRequestBuilderNavigationMetadata, UserFlowAttributesRequestBuilderRequestsMetadata } from './userFlowAttributes/index.js';
// @ts-ignore
import { type UserFlowsRequestBuilder, UserFlowsRequestBuilderNavigationMetadata, UserFlowsRequestBuilderRequestsMetadata } from './userFlows/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the identityContainer singleton.
 */
export interface IdentityRequestBuilder extends BaseRequestBuilder<IdentityRequestBuilder> {
    /**
     * Provides operations to manage the apiConnectors property of the microsoft.graph.identityContainer entity.
     */
    get apiConnectors(): ApiConnectorsRequestBuilder;
    /**
     * Provides operations to manage the authenticationEventListeners property of the microsoft.graph.identityContainer entity.
     */
    get authenticationEventListeners(): AuthenticationEventListenersRequestBuilder;
    /**
     * Provides operations to manage the authenticationEventsFlows property of the microsoft.graph.identityContainer entity.
     */
    get authenticationEventsFlows(): AuthenticationEventsFlowsRequestBuilder;
    /**
     * Provides operations to manage the b2cUserFlows property of the microsoft.graph.identityContainer entity.
     */
    get b2cUserFlows(): B2cUserFlowsRequestBuilder;
    /**
     * Provides operations to manage the b2xUserFlows property of the microsoft.graph.identityContainer entity.
     */
    get b2xUserFlows(): B2xUserFlowsRequestBuilder;
    /**
     * The conditionalAccess property
     */
    get conditionalAccess(): ConditionalAccessRequestBuilder;
    /**
     * Provides operations to manage the continuousAccessEvaluationPolicy property of the microsoft.graph.identityContainer entity.
     */
    get continuousAccessEvaluationPolicy(): ContinuousAccessEvaluationPolicyRequestBuilder;
    /**
     * Provides operations to manage the customAuthenticationExtensions property of the microsoft.graph.identityContainer entity.
     */
    get customAuthenticationExtensions(): CustomAuthenticationExtensionsRequestBuilder;
    /**
     * Provides operations to manage the identityProviders property of the microsoft.graph.identityContainer entity.
     */
    get identityProviders(): IdentityProvidersRequestBuilder;
    /**
     * Provides operations to manage the productChanges property of the microsoft.graph.identityContainer entity.
     */
    get productChanges(): ProductChangesRequestBuilder;
    /**
     * Provides operations to manage the userFlowAttributes property of the microsoft.graph.identityContainer entity.
     */
    get userFlowAttributes(): UserFlowAttributesRequestBuilder;
    /**
     * Provides operations to manage the userFlows property of the microsoft.graph.identityContainer entity.
     */
    get userFlows(): UserFlowsRequestBuilder;
    /**
     * Get identity
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<IdentityContainer>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<IdentityRequestBuilderGetQueryParameters> | undefined) : Promise<IdentityContainer | undefined>;
    /**
     * Update identity
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<IdentityContainer>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     patch(body: IdentityContainer, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<IdentityContainer | undefined>;
    /**
     * Get identity
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<IdentityRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update identity
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: IdentityContainer, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get identity
 */
export interface IdentityRequestBuilderGetQueryParameters {
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
export const IdentityRequestBuilderUriTemplate = "{+baseurl}/identity{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const IdentityRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const IdentityRequestBuilderNavigationMetadata: Record<Exclude<keyof IdentityRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    apiConnectors: {
        requestsMetadata: ApiConnectorsRequestBuilderRequestsMetadata,
        navigationMetadata: ApiConnectorsRequestBuilderNavigationMetadata,
    },
    authenticationEventListeners: {
        requestsMetadata: AuthenticationEventListenersRequestBuilderRequestsMetadata,
        navigationMetadata: AuthenticationEventListenersRequestBuilderNavigationMetadata,
    },
    authenticationEventsFlows: {
        requestsMetadata: AuthenticationEventsFlowsRequestBuilderRequestsMetadata,
        navigationMetadata: AuthenticationEventsFlowsRequestBuilderNavigationMetadata,
    },
    b2cUserFlows: {
        requestsMetadata: B2cUserFlowsRequestBuilderRequestsMetadata,
        navigationMetadata: B2cUserFlowsRequestBuilderNavigationMetadata,
    },
    b2xUserFlows: {
        requestsMetadata: B2xUserFlowsRequestBuilderRequestsMetadata,
        navigationMetadata: B2xUserFlowsRequestBuilderNavigationMetadata,
    },
    conditionalAccess: {
        navigationMetadata: ConditionalAccessRequestBuilderNavigationMetadata,
    },
    continuousAccessEvaluationPolicy: {
        requestsMetadata: ContinuousAccessEvaluationPolicyRequestBuilderRequestsMetadata,
    },
    customAuthenticationExtensions: {
        requestsMetadata: CustomAuthenticationExtensionsRequestBuilderRequestsMetadata,
        navigationMetadata: CustomAuthenticationExtensionsRequestBuilderNavigationMetadata,
    },
    identityProviders: {
        requestsMetadata: IdentityProvidersRequestBuilderRequestsMetadata,
        navigationMetadata: IdentityProvidersRequestBuilderNavigationMetadata,
    },
    productChanges: {
        requestsMetadata: ProductChangesRequestBuilderRequestsMetadata,
        navigationMetadata: ProductChangesRequestBuilderNavigationMetadata,
    },
    userFlowAttributes: {
        requestsMetadata: UserFlowAttributesRequestBuilderRequestsMetadata,
        navigationMetadata: UserFlowAttributesRequestBuilderNavigationMetadata,
    },
    userFlows: {
        requestsMetadata: UserFlowsRequestBuilderRequestsMetadata,
        navigationMetadata: UserFlowsRequestBuilderNavigationMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const IdentityRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: IdentityRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createIdentityContainerFromDiscriminatorValue,
        queryParametersMapper: IdentityRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: IdentityRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createIdentityContainerFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeIdentityContainer,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
