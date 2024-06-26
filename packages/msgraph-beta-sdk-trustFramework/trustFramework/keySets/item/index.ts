/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createTrustFrameworkKeySetFromDiscriminatorValue, serializeTrustFrameworkKeySet, type TrustFrameworkKeySet } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { GenerateKeyRequestBuilderRequestsMetadata, type GenerateKeyRequestBuilder } from './generateKey/index.js';
// @ts-ignore
import { GetActiveKeyRequestBuilderRequestsMetadata, type GetActiveKeyRequestBuilder } from './getActiveKey/index.js';
// @ts-ignore
import { Keys_v2RequestBuilderNavigationMetadata, Keys_v2RequestBuilderRequestsMetadata, type Keys_v2RequestBuilder } from './keys_v2/index.js';
// @ts-ignore
import { type UploadCertificateRequestBuilder, UploadCertificateRequestBuilderRequestsMetadata } from './uploadCertificate/index.js';
// @ts-ignore
import { type UploadPkcs12RequestBuilder, UploadPkcs12RequestBuilderRequestsMetadata } from './uploadPkcs12/index.js';
// @ts-ignore
import { type UploadSecretRequestBuilder, UploadSecretRequestBuilderRequestsMetadata } from './uploadSecret/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the keySets property of the microsoft.graph.trustFramework entity.
 */
export interface TrustFrameworkKeySetItemRequestBuilder extends BaseRequestBuilder<TrustFrameworkKeySetItemRequestBuilder> {
    /**
     * Provides operations to call the generateKey method.
     */
    get generateKey(): GenerateKeyRequestBuilder;
    /**
     * Provides operations to call the getActiveKey method.
     */
    get getActiveKey(): GetActiveKeyRequestBuilder;
    /**
     * Provides operations to manage the keys_v2 property of the microsoft.graph.trustFrameworkKeySet entity.
     */
    get keys_v2(): Keys_v2RequestBuilder;
    /**
     * Provides operations to call the uploadCertificate method.
     */
    get uploadCertificate(): UploadCertificateRequestBuilder;
    /**
     * Provides operations to call the uploadPkcs12 method.
     */
    get uploadPkcs12(): UploadPkcs12RequestBuilder;
    /**
     * Provides operations to call the uploadSecret method.
     */
    get uploadSecret(): UploadSecretRequestBuilder;
    /**
     * Delete a trustFrameworkKeySet.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/trustframeworkkeyset-delete?view=graph-rest-beta|Find more info here}
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Retrieve the properties and associations for a Trustframeworkkeyset.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<TrustFrameworkKeySet>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/trustframeworkkeyset-get?view=graph-rest-beta|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<TrustFrameworkKeySetItemRequestBuilderGetQueryParameters> | undefined) : Promise<TrustFrameworkKeySet | undefined>;
    /**
     * Update the properties of a trustFrameworkKeyset. This operation will replace the content of an existing keyset. Specifying the ID in the request payload is optional.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<TrustFrameworkKeySet>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/trustframeworkkeyset-update?view=graph-rest-beta|Find more info here}
     */
     patch(body: TrustFrameworkKeySet, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<TrustFrameworkKeySet | undefined>;
    /**
     * Delete a trustFrameworkKeySet.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Retrieve the properties and associations for a Trustframeworkkeyset.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<TrustFrameworkKeySetItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the properties of a trustFrameworkKeyset. This operation will replace the content of an existing keyset. Specifying the ID in the request payload is optional.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: TrustFrameworkKeySet, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Retrieve the properties and associations for a Trustframeworkkeyset.
 */
export interface TrustFrameworkKeySetItemRequestBuilderGetQueryParameters {
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
export const TrustFrameworkKeySetItemRequestBuilderUriTemplate = "{+baseurl}/trustFramework/keySets/{trustFrameworkKeySet%2Did}{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const TrustFrameworkKeySetItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const TrustFrameworkKeySetItemRequestBuilderNavigationMetadata: Record<Exclude<keyof TrustFrameworkKeySetItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    generateKey: {
        requestsMetadata: GenerateKeyRequestBuilderRequestsMetadata,
    },
    getActiveKey: {
        requestsMetadata: GetActiveKeyRequestBuilderRequestsMetadata,
    },
    keys_v2: {
        requestsMetadata: Keys_v2RequestBuilderRequestsMetadata,
        navigationMetadata: Keys_v2RequestBuilderNavigationMetadata,
    },
    uploadCertificate: {
        requestsMetadata: UploadCertificateRequestBuilderRequestsMetadata,
    },
    uploadPkcs12: {
        requestsMetadata: UploadPkcs12RequestBuilderRequestsMetadata,
    },
    uploadSecret: {
        requestsMetadata: UploadSecretRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const TrustFrameworkKeySetItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: TrustFrameworkKeySetItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: TrustFrameworkKeySetItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createTrustFrameworkKeySetFromDiscriminatorValue,
        queryParametersMapper: TrustFrameworkKeySetItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: TrustFrameworkKeySetItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createTrustFrameworkKeySetFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeTrustFrameworkKeySet,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
