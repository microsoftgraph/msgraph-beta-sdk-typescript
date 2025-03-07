/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createAgreementFileVersionCollectionResponseFromDiscriminatorValue, createAgreementFileVersionFromDiscriminatorValue, serializeAgreementFileVersion, type AgreementFileVersion, type AgreementFileVersionCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { CountRequestBuilderRequestsMetadata, type CountRequestBuilder } from './count/index.js';
// @ts-ignore
import { AgreementFileVersionItemRequestBuilderRequestsMetadata, type AgreementFileVersionItemRequestBuilder } from './item/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the versions property of the microsoft.graph.agreementFileLocalization entity.
 */
export interface VersionsRequestBuilder extends BaseRequestBuilder<VersionsRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the versions property of the microsoft.graph.agreementFileLocalization entity.
     * @param agreementFileVersionId The unique identifier of agreementFileVersion
     * @returns {AgreementFileVersionItemRequestBuilder}
     */
     byAgreementFileVersionId(agreementFileVersionId: string) : AgreementFileVersionItemRequestBuilder;
    /**
     * Read-only. Customized versions of the terms of use agreement in the Microsoft Entra tenant.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<AgreementFileVersionCollectionResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<VersionsRequestBuilderGetQueryParameters> | undefined) : Promise<AgreementFileVersionCollectionResponse | undefined>;
    /**
     * Create new navigation property to versions for identityGovernance
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<AgreementFileVersion>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: AgreementFileVersion, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<AgreementFileVersion | undefined>;
    /**
     * Read-only. Customized versions of the terms of use agreement in the Microsoft Entra tenant.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<VersionsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create new navigation property to versions for identityGovernance
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: AgreementFileVersion, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Read-only. Customized versions of the terms of use agreement in the Microsoft Entra tenant.
 */
export interface VersionsRequestBuilderGetQueryParameters {
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
export const VersionsRequestBuilderUriTemplate = "{+baseurl}/identityGovernance/termsOfUse/agreements/{agreement%2Did}/file/localizations/{agreementFileLocalization%2Did}/versions{?%24count,%24expand,%24filter,%24orderby,%24search,%24select,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const VersionsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const VersionsRequestBuilderNavigationMetadata: Record<Exclude<keyof VersionsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byAgreementFileVersionId: {
        requestsMetadata: AgreementFileVersionItemRequestBuilderRequestsMetadata,
        pathParametersMappings: ["agreementFileVersion%2Did"],
    },
    count: {
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const VersionsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: VersionsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createAgreementFileVersionCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: VersionsRequestBuilderGetQueryParametersMapper,
    },
    post: {
        uriTemplate: VersionsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createAgreementFileVersionFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeAgreementFileVersion,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
