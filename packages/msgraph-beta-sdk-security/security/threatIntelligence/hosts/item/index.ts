/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { createHostFromDiscriminatorValue, serializeHost, type Host } from '@microsoft/msgraph-beta-sdk/models/security/';
import { ChildHostPairsRequestBuilderNavigationMetadata, ChildHostPairsRequestBuilderRequestsMetadata, ChildHostPairsRequestBuilderUriTemplate, type ChildHostPairsRequestBuilder } from './childHostPairs/';
import { ComponentsRequestBuilderNavigationMetadata, ComponentsRequestBuilderRequestsMetadata, ComponentsRequestBuilderUriTemplate, type ComponentsRequestBuilder } from './components/';
import { CookiesRequestBuilderNavigationMetadata, CookiesRequestBuilderRequestsMetadata, CookiesRequestBuilderUriTemplate, type CookiesRequestBuilder } from './cookies/';
import { HostPairsRequestBuilderNavigationMetadata, HostPairsRequestBuilderRequestsMetadata, HostPairsRequestBuilderUriTemplate, type HostPairsRequestBuilder } from './hostPairs/';
import { ParentHostPairsRequestBuilderNavigationMetadata, ParentHostPairsRequestBuilderRequestsMetadata, ParentHostPairsRequestBuilderUriTemplate, type ParentHostPairsRequestBuilder } from './parentHostPairs/';
import { PassiveDnsRequestBuilderNavigationMetadata, PassiveDnsRequestBuilderRequestsMetadata, PassiveDnsRequestBuilderUriTemplate, type PassiveDnsRequestBuilder } from './passiveDns/';
import { PassiveDnsReverseRequestBuilderNavigationMetadata, PassiveDnsReverseRequestBuilderRequestsMetadata, PassiveDnsReverseRequestBuilderUriTemplate, type PassiveDnsReverseRequestBuilder } from './passiveDnsReverse/';
import { PortsRequestBuilderNavigationMetadata, PortsRequestBuilderRequestsMetadata, PortsRequestBuilderUriTemplate, type PortsRequestBuilder } from './ports/';
import { ReputationRequestBuilderRequestsMetadata, ReputationRequestBuilderUriTemplate, type ReputationRequestBuilder } from './reputation/';
import { SslCertificatesRequestBuilderNavigationMetadata, SslCertificatesRequestBuilderRequestsMetadata, SslCertificatesRequestBuilderUriTemplate, type SslCertificatesRequestBuilder } from './sslCertificates/';
import { SubdomainsRequestBuilderNavigationMetadata, SubdomainsRequestBuilderRequestsMetadata, SubdomainsRequestBuilderUriTemplate, type SubdomainsRequestBuilder } from './subdomains/';
import { TrackersRequestBuilderNavigationMetadata, TrackersRequestBuilderRequestsMetadata, TrackersRequestBuilderUriTemplate, type TrackersRequestBuilder } from './trackers/';
import { type WhoisRequestBuilder, WhoisRequestBuilderRequestsMetadata, WhoisRequestBuilderUriTemplate } from './whois/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the hosts property of the microsoft.graph.security.threatIntelligence entity.
 */
export interface HostItemRequestBuilder extends BaseRequestBuilder<HostItemRequestBuilder> {
    /**
     * Provides operations to manage the childHostPairs property of the microsoft.graph.security.host entity.
     */
    get childHostPairs(): ChildHostPairsRequestBuilder;
    /**
     * Provides operations to manage the components property of the microsoft.graph.security.host entity.
     */
    get components(): ComponentsRequestBuilder;
    /**
     * Provides operations to manage the cookies property of the microsoft.graph.security.host entity.
     */
    get cookies(): CookiesRequestBuilder;
    /**
     * Provides operations to manage the hostPairs property of the microsoft.graph.security.host entity.
     */
    get hostPairs(): HostPairsRequestBuilder;
    /**
     * Provides operations to manage the parentHostPairs property of the microsoft.graph.security.host entity.
     */
    get parentHostPairs(): ParentHostPairsRequestBuilder;
    /**
     * Provides operations to manage the passiveDns property of the microsoft.graph.security.host entity.
     */
    get passiveDns(): PassiveDnsRequestBuilder;
    /**
     * Provides operations to manage the passiveDnsReverse property of the microsoft.graph.security.host entity.
     */
    get passiveDnsReverse(): PassiveDnsReverseRequestBuilder;
    /**
     * Provides operations to manage the ports property of the microsoft.graph.security.host entity.
     */
    get ports(): PortsRequestBuilder;
    /**
     * Provides operations to manage the reputation property of the microsoft.graph.security.host entity.
     */
    get reputation(): ReputationRequestBuilder;
    /**
     * Provides operations to manage the sslCertificates property of the microsoft.graph.security.host entity.
     */
    get sslCertificates(): SslCertificatesRequestBuilder;
    /**
     * Provides operations to manage the subdomains property of the microsoft.graph.security.host entity.
     */
    get subdomains(): SubdomainsRequestBuilder;
    /**
     * Provides operations to manage the trackers property of the microsoft.graph.security.host entity.
     */
    get trackers(): TrackersRequestBuilder;
    /**
     * Provides operations to manage the whois property of the microsoft.graph.security.host entity.
     */
    get whois(): WhoisRequestBuilder;
    /**
     * Delete navigation property hosts for security
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Read the properties and relationships of a host object. The host resource is the abstract base type that returns an implementation. A host can be of one of the following types:
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Host
     * @see {@link https://learn.microsoft.com/graph/api/security-host-get?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<HostItemRequestBuilderGetQueryParameters> | undefined) : Promise<Host | undefined>;
    /**
     * Update the navigation property hosts in security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Host
     */
     patch(body: Host, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<Host | undefined>;
    /**
     * Delete navigation property hosts for security
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Read the properties and relationships of a host object. The host resource is the abstract base type that returns an implementation. A host can be of one of the following types:
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<HostItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property hosts in security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPatchRequestInformation(body: Host, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Read the properties and relationships of a host object. The host resource is the abstract base type that returns an implementation. A host can be of one of the following types:
 */
export interface HostItemRequestBuilderGetQueryParameters {
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
const HostItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const HostItemRequestBuilderNavigationMetadata: Record<Exclude<keyof HostItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    childHostPairs: {
        uriTemplate: ChildHostPairsRequestBuilderUriTemplate,
        requestsMetadata: ChildHostPairsRequestBuilderRequestsMetadata,
        navigationMetadata: ChildHostPairsRequestBuilderNavigationMetadata,
    },
    components: {
        uriTemplate: ComponentsRequestBuilderUriTemplate,
        requestsMetadata: ComponentsRequestBuilderRequestsMetadata,
        navigationMetadata: ComponentsRequestBuilderNavigationMetadata,
    },
    cookies: {
        uriTemplate: CookiesRequestBuilderUriTemplate,
        requestsMetadata: CookiesRequestBuilderRequestsMetadata,
        navigationMetadata: CookiesRequestBuilderNavigationMetadata,
    },
    hostPairs: {
        uriTemplate: HostPairsRequestBuilderUriTemplate,
        requestsMetadata: HostPairsRequestBuilderRequestsMetadata,
        navigationMetadata: HostPairsRequestBuilderNavigationMetadata,
    },
    parentHostPairs: {
        uriTemplate: ParentHostPairsRequestBuilderUriTemplate,
        requestsMetadata: ParentHostPairsRequestBuilderRequestsMetadata,
        navigationMetadata: ParentHostPairsRequestBuilderNavigationMetadata,
    },
    passiveDns: {
        uriTemplate: PassiveDnsRequestBuilderUriTemplate,
        requestsMetadata: PassiveDnsRequestBuilderRequestsMetadata,
        navigationMetadata: PassiveDnsRequestBuilderNavigationMetadata,
    },
    passiveDnsReverse: {
        uriTemplate: PassiveDnsReverseRequestBuilderUriTemplate,
        requestsMetadata: PassiveDnsReverseRequestBuilderRequestsMetadata,
        navigationMetadata: PassiveDnsReverseRequestBuilderNavigationMetadata,
    },
    ports: {
        uriTemplate: PortsRequestBuilderUriTemplate,
        requestsMetadata: PortsRequestBuilderRequestsMetadata,
        navigationMetadata: PortsRequestBuilderNavigationMetadata,
    },
    reputation: {
        uriTemplate: ReputationRequestBuilderUriTemplate,
        requestsMetadata: ReputationRequestBuilderRequestsMetadata,
    },
    sslCertificates: {
        uriTemplate: SslCertificatesRequestBuilderUriTemplate,
        requestsMetadata: SslCertificatesRequestBuilderRequestsMetadata,
        navigationMetadata: SslCertificatesRequestBuilderNavigationMetadata,
    },
    subdomains: {
        uriTemplate: SubdomainsRequestBuilderUriTemplate,
        requestsMetadata: SubdomainsRequestBuilderRequestsMetadata,
        navigationMetadata: SubdomainsRequestBuilderNavigationMetadata,
    },
    trackers: {
        uriTemplate: TrackersRequestBuilderUriTemplate,
        requestsMetadata: TrackersRequestBuilderRequestsMetadata,
        navigationMetadata: TrackersRequestBuilderNavigationMetadata,
    },
    whois: {
        uriTemplate: WhoisRequestBuilderUriTemplate,
        requestsMetadata: WhoisRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const HostItemRequestBuilderRequestsMetadata: RequestsMetadata = {
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
        responseBodyFactory:  createHostFromDiscriminatorValue,
        queryParametersMapper: HostItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createHostFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeHost,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const HostItemRequestBuilderUriTemplate = "{+baseurl}/security/threatIntelligence/hosts/{host%2Did}{?%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */